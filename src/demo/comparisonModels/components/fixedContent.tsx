import { View, Text, StyleSheet } from 'react-native';


const FixedContent = (props: any) => {

  return <View style={[styles.root, { top: props.initBoxPos }]}>
    {/*  参数对比 只看不同 核心参数*/}

    <View style={[styles.sty1]}>
      <Text style={styles.text1}>参数对比</Text>
      <Text style={styles.text2}>只看不同</Text>
    </View>
    <View style={{ height: props.detailParamPos }}>
      <Text style={styles.text3}>核心参数</Text>
      <View style={styles.line}></View>
    </View>
    <View style={styles.sty1}>
      <Text style={styles.text1}>详细参数</Text>
    </View>
    {/* 详细参数部分---遍历生成高度和标题 */}
    {
      props.detailList.map((item: any, index: number) => (
        <View style={{ height: item.height }} key={index}>
          <Text style={styles.txt}>{item.title}</Text>
          <View style={styles.line}></View>
        </View>
      ))
    }
  </View>
}

const styles = StyleSheet.create({
  root: {
    pointerEvents: "none",
    width: "100%",
    position: 'absolute',
  },
  sty1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold"
  },
  text2: {
    fontSize: 14
  },
  text3: {
    fontSize: 14,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
  txt: {
    fontSize: 14,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    color: '#000',
    fontWeight: "bold"
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    marginHorizontal: 16
  }
})

export default FixedContent