import React, { Component, DetailedReactHTMLElement, LegacyRef } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  RefreshControl,
  VirtualizedList,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleProp,
  ViewStyle
} from 'react-native'

export default class WaterfallList<T extends Record<string, any>> extends Component<
  WaterfallListProps<T>,
  WaterfallListState<T>
> {
  static defaultProps = {
    scrollEventThrottle: 50,
    numColumns: 1,
    renderScrollComponent: (props: WaterfallListProps) => {
      if (props.onRefresh && props.refreshing != null) {
        return (
          <ScrollView
            {...props}
            nestedScrollEnabled
            refreshControl={<RefreshControl refreshing={props.refreshing} onRefresh={props.onRefresh} />}
          />
        )
      }
      return <ScrollView {...props} />
    }
  }

  state = _reconstructData<T>(this.props)
  _listRefs: Array<VirtualizedList<T> | null> = []
  _scrollRef: ScrollView | null | undefined

  UNSAFE_componentWillReceiveProps(newProps: WaterfallListProps) {
    this.setState(_reconstructData<T>(newProps))
  }

  _onLayout = (event: LayoutChangeEvent) => {
    // @ts-ignore
    this._listRefs.forEach(list => list && list?._onLayout && list._onLayout(event))
  }

  _onContentSizeChange = (width: number, height: number) => {
    // @ts-ignore
    this._listRefs.forEach(list => list && list._onContentSizeChange && list._onContentSizeChange(width, height))
  }

  _onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (this.props.onScroll) {
      this.props.onScroll(event)
    }
    // @ts-ignore
    this._listRefs.forEach(list => list && list._onScroll && list._onScroll(event))
  }

  _onScrollBeginDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (this.props.onScrollBeginDrag) {
      this.props.onScrollBeginDrag(event)
    }
    // @ts-ignore
    this._listRefs.forEach(list => list && list._onScrollBeginDrag && list._onScrollBeginDrag(event))
  }

  _onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (this.props.onScrollEndDrag) {
      this.props.onScrollEndDrag(event)
    }
    // @ts-ignore
    this._listRefs.forEach(list => list && list._onScrollEndDrag && list._onScrollEndDrag(event))
  }

  _onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (this.props.onMomentumScrollEnd) {
      this.props.onMomentumScrollEnd(event)
    }
    // @ts-ignore
    this._listRefs.forEach(list => list && list._onMomentumScrollEnd && list._onMomentumScrollEnd(event))
  }

  _getItemLayout = (columnIndex: number, rowIndex: number) => {
    const column = this.state.columns[columnIndex]
    let offset = 0
    for (let ii = 0; ii < rowIndex; ii += 1) {
      offset += column.heights[ii]
    }
    return { length: column.heights[rowIndex], offset, index: rowIndex }
  }

  _getItemCount = (data: Array<T>) => data.length

  _getItem = (data: Array<T>, index: number) => data[index]

  _captureScrollRef: LegacyRef<ScrollView> = ref => (this._scrollRef = ref)

  render() {
    const { renderItem, ListHeaderComponent, ListEmptyComponent, keyExtractor, onEndReached, ...props } = this.props
    let headerElement
    if (ListHeaderComponent) {
      headerElement = <ListHeaderComponent />
    }
    let emptyElement
    if (ListEmptyComponent) {
      emptyElement = <ListEmptyComponent />
    }

    const content = (
      <View style={styles.contentContainer}>
        {this.state.columns.map(col => (
          <VirtualizedList<T>
            {...props}
            ref={ref => (this._listRefs[col.index] = ref)}
            key={`$col_${col.index}`}
            data={col.data}
            getItemCount={this._getItemCount}
            getItem={this._getItem}
            getItemLayout={(data, index) => this._getItemLayout(col.index, index)}
            renderItem={({ item, index }) => renderItem({ item, index, column: col.index })}
            renderScrollComponent={() => <View style={styles.column} />}
            keyExtractor={keyExtractor}
            onEndReached={onEndReached}
            onEndReachedThreshold={this.props.onEndReachedThreshold}
            removeClippedSubviews={false}
          />
        ))}
      </View>
    )

    return React.cloneElement(
      this.props.renderScrollComponent(this.props),
      {
        ref: this._captureScrollRef,
        removeClippedSubviews: false,
        onContentSizeChange: this._onContentSizeChange,
        onLayout: this._onLayout,
        onScroll: this._onScroll,
        onScrollBeginDrag: this._onScrollBeginDrag,
        onScrollEndDrag: this._onScrollEndDrag,
        onMomentumScrollEnd: this._onMomentumScrollEnd
      },
      headerElement,
      emptyElement && this.props.data.length === 0 ? emptyElement : content
    )
  }
}

function _reconstructData<ItemT = any>(params: { numColumns: number; data: Array<any>; getHeightForItem: Function }) {
  const { numColumns, data, getHeightForItem } = params

  const columns: Array<Column<ItemT>> = Array.from({
    length: numColumns
  }).map((col, i) => ({
    index: i,
    totalHeight: 0,
    data: [],
    heights: []
  }))

  data.forEach((item, index) => {
    const height = getHeightForItem({ item, index })
    //判断数据项应该进的列
    const column = columns.reduce((prev, cur) => (cur.totalHeight < prev.totalHeight ? cur : prev), columns[0])
    column.data.push(item)
    column.heights.push(height)
    column.totalHeight += height
  })
  return { columns }
}

export type WaterfallListProps<ItemT = any> = {
  data: Array<ItemT>
  numColumns: number
  renderItem: ({ item, index, column }: { item: ItemT; index: number; column: number }) => React.ReactElement
  getHeightForItem: ({ item, index }: { item: ItemT; index: number }) => number
  ListHeaderComponent?: React.ComponentType<any>
  ListEmptyComponent?: React.ComponentType<any>
  keyExtractor?: (item: ItemT, index: number) => string
  onEndReached?: (info: { distanceFromEnd: number }) => void
  contentContainerStyle?: StyleProp<ViewStyle>
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onScrollBeginDrag?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onScrollEndDrag?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onMomentumScrollEnd?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onEndReachedThreshold?: number
  scrollEventThrottle: number
  renderScrollComponent: (props: Object) => DetailedReactHTMLElement<any, ScrollView>
  refreshing?: boolean
  onRefresh?: (() => void) | undefined
}

type Column<ItemT = any> = {
  index: number
  totalHeight: number
  data: Array<ItemT>
  heights: Array<number>
}

type WaterfallListState<ItemT = any> = {
  columns: Array<Column<ItemT>>
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  column: {
    flex: 1
  }
})
