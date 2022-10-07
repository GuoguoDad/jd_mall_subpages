import React, { PureComponent, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { Scene, WaterfallList } from '@comps'
import { PageParamList } from '@params'

type IData = {
  id: string
  height: number
  color: string
}

const COLORS = ['green', 'blue', 'red']
const DATA: Array<IData> = Array.from({ length: 200 }).map((_, i) => ({
  id: `item_${i}`,
  height: Math.round(Math.random() * 100 + 50),
  color: COLORS[i % COLORS.length]
}))

const Waterfall = () => {
  const { params } = useRoute<RouteProp<PageParamList, 'WaterFall'>>()
  const { from } = params

  console.log('=====from:', from)
  // console.log('=====params:', params)

  const [isRefreshing, setRefreshing] = useState(false)

  const _refreshRequest = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }

  return (
    <Scene title="瀑布流">
      <WaterfallList<IData>
        onRefresh={_refreshRequest}
        refreshing={isRefreshing}
        data={DATA}
        renderItem={({ item }) => <Cell item={item} />}
        getHeightForItem={({ item }) => item.height + 2}
        numColumns={3}
        keyExtractor={item => item.id}
      />
    </Scene>
  )
}

export default Waterfall

class Cell extends PureComponent<{ item: { id: string; height: number; color: string } }> {
  render() {
    const { item } = this.props
    return (
      <View style={[styles.cell, { height: item.height, backgroundColor: item.color }]}>
        <Text>{item.id}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cell: {
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
