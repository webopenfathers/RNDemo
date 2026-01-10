import { View, StyleSheet, FlatList, Text } from 'react-native'
import { useRef } from 'react';
import { specificationList } from '../constants/disPrdSet'
import { getStyle } from '../utils';
const commonStyle = getStyle()



const DetailParam = (props: any) => {
  const arr = useRef<any>([])
  const setList = (height: any) => {
    arr.current.push(height)
    props.handleSetDetailList(arr.current)
  }

  const renderItem = ({ item, index }: { item: any, index: number }) => {
    return <View style={{ flexDirection: "column" }} onLayout={(event: any) => {
      item.height = event.nativeEvent.layout.height
      setList(item)
    }}>
      <View style={{ paddingTop: 50 }}></View>
      {
        item.content.map((ele: any, i: number) => (
          <View key={i} style={{ flexDirection: "row" }}>
            {
              ele.map((k: any, j: number) => (
                <View key={`${i}-${j}`} style={{ width: commonStyle.params.width, marginRight: commonStyle.Space, paddingBottom: 30 }}>
                  <Text style={styles.nameStyle}>{k.name}</Text>
                  <Text>{k.value}</Text>
                </View>
              ))
            }
          </View>
        ))
      }
    </View>
  }

  return <FlatList
    style={{ flex: 1, marginTop: 80 }}
    keyExtractor={(_, index) => `${index}`}
    data={specificationList}
    renderItem={renderItem}
  />
}

export default DetailParam

const styles = StyleSheet.create({
  box: {
    position: "absolute"
  },
  nameStyle: {
    marginBottom: 4,
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16
  }
})