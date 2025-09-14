import { View, StyleSheet, Image, FlatList, Text } from 'react-native'
import { useRef } from 'react';
import { specificationList } from '../constants/disPrdSet'



const DetailParam = (props: any) => {
  const arr = useRef<any>([])
  const setList = (height: any) => {
    arr.current.push(height)
    props.handleSetDetailList(arr.current)
  }

  const renderItem = ({ item, index }: { item: any, index: number }) => {
    return <View style={{ paddingLeft: 20, flexDirection: "column" }} onLayout={(event: any) => {
      item.height = event.nativeEvent.layout.height
      setList(item)
    }}>
      <View style={{ paddingTop: 50 }}></View>
      {
        item.content.map((ele: any, i: number) => (
          <View key={i} style={{ flexDirection: "row" }}>
            {
              ele.map((k: any, j: number) => (
                <View key={`${i}-${j}`} style={{ width: 155, marginRight: 20, paddingBottom: 30 }}>
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
  textStyle: {
    position: "absolute",
    marginBottom: 4,
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 16,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginRight: 10,
    borderBottomColor: "#ccc"
  },
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