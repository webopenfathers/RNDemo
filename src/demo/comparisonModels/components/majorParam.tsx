import { View, StyleSheet, Image, Text } from 'react-native'
import disPrdSet from '../constants/disPrdSet.js'


// 实现逻辑---处理数据
const map = new Map();
const disPrdIdList: any = []
// 遍历每个对象的 a 数组
disPrdSet.forEach(item => {
  disPrdIdList.push(item.disPrdId)
  item.majorSpecificationList.forEach(obj => {
    const { code } = obj;
    if (!map.has(code)) {
      map.set(code, []);
    }
    map.get(code).push({ ...obj, disPrdId: item.disPrdId });
  });
});

// 按照 code 的顺序（比如 A, B）提取结果
// 二维数组，按照code值相同进行分类
const formatMajorParam = [...map.values()];

console.log(formatMajorParam, 'formatMajorParam');



disPrdIdList.forEach((ele: any, index: any) => {
  formatMajorParam.forEach(item => {
    if (item.length !== disPrdIdList.length) {
      const bbb = item.findIndex((v: any) => v.disPrdId === ele)
      if (bbb === -1) {
        item.splice(index, 0, { name: item[0].name, value: '-' })
      }
    }
  })
})


const MajorParam = (props: any) => {
  return <View style={styles.root} onLayout={(event) => {
    props.handleSetDetailParam(event.nativeEvent.layout)
  }}>
    {/* 遍历显示核心参数 */}
    {
      formatMajorParam.map((item: any, index: number) => (
        <View style={styles.itemWidth} key={index}>
          {
            item.map((subItem: any, subIndex: number) => (
              <View key={`${index}-${subIndex}`} style={styles.listStyle}>
                <Text style={styles.textStyle}>{subItem.name}</Text>
                <Text>{subItem.value}</Text>
              </View>
            ))
          }
        </View>
      ))
    }
  </View>
}

export default MajorParam


const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    flex: 1,
    paddingLeft: 20,
    paddingTop: 80,
  },
  itemWidth: {
    flexDirection: "row",
    paddingVertical: 15
  },
  listStyle: {
    marginRight: 20,
    width: 155
  },
  textStyle: {
    marginBottom: 4,
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16
  }
})