import React, { LegacyRef } from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  RefreshControl,
  ListRenderItem,
  NativeSyntheticEvent,
  NativeScrollEvent
} from 'react-native'
import { NoData, PageFooter } from '@comps'
import { px2Dp, getIphoneBottomSpace } from '@kit'

class PageRefreshList<T extends Record<string, any>> extends React.Component<PageListProps<T>, PageListState> {
  constructor(props: PageListProps) {
    super(props)
    this.state = {
      dataList: this.props.dataList,
      isRefresh: this.props.isRefresh,
      isLoading: this.props.isLoading,
      hasMore: this.props.hasMore
    }
  }

  componentWillReceiveProps(nextProps: Readonly<PageListProps>, nextContext: any) {
    const { hasMore, isRefresh, isLoading, dataList } = nextProps
    if (
      hasMore !== this.state.hasMore ||
      isRefresh !== this.state.isRefresh ||
      isLoading !== this.state.isLoading ||
      dataList !== this.state.dataList
    ) {
      this.setState({ hasMore, isRefresh, isLoading, dataList })
    }
  }

  render() {
    const {
      forwardRef = null,
      columnNum = 1,
      defaultNumToRender = 10,
      onPullRefresh = () => {},
      onPageScroll = () => {},
      renderEmptyView = <NoData />,
      headerComponent = null,
      renderListItem,
      onLoadMore
    } = this.props
    const { dataList, isRefresh, isLoading, hasMore } = this.state

    let empty = null
    if (!isLoading) {
      empty = renderEmptyView
    }

    return (
      <FlatList
        ref={forwardRef}
        data={dataList}
        numColumns={columnNum}
        renderItem={renderListItem}
        initialNumToRender={defaultNumToRender}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: object, index: number) => `${index}`}
        ListHeaderComponent={headerComponent}
        onEndReachedThreshold={0.01}
        onEndReached={() => {
          if (hasMore) {
            onLoadMore()
          }
        }}
        ListEmptyComponent={empty}
        onScroll={onPageScroll}
        refreshControl={
          <RefreshControl
            refreshing={isRefresh}
            onRefresh={() => {
              onPullRefresh()
            }}
          />
        }
        ListFooterComponent={
          isLoading && hasMore ? (
            <View style={styles.footer}>
              <Text style={styles.tip}>加载中...</Text>
            </View>
          ) : !isLoading && !hasMore && dataList.length > 0 ? (
            <PageFooter />
          ) : null
        }
      />
    )
  }
}

export default PageRefreshList

type PageListProps<ItemT = any> = {
  forwardRef?: LegacyRef<FlatList>
  dataList: Array<ItemT>
  isRefresh: boolean
  isLoading: boolean
  hasMore: boolean
  columnNum?: number
  onPullRefresh?: Function
  onLoadMore: Function
  onPageScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  defaultNumToRender?: number
  headerComponent?: React.ComponentType<any> | React.ReactElement | null
  renderEmptyView?: React.ComponentType<any> | React.ReactElement | null
  renderListItem: ListRenderItem<ItemT> | null | undefined
}

type PageListState = {
  dataList: Array<any>
  isRefresh: boolean
  isLoading: boolean
  hasMore: boolean
}

const styles = StyleSheet.create({
  footer: {
    height: px2Dp(84) + getIphoneBottomSpace(),
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: getIphoneBottomSpace()
  },
  tip: {
    color: '#cccccc',
    fontSize: 14
  }
})
