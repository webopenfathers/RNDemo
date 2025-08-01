import { StyleSheet, View, Button } from 'react-native'

// Transform 矩阵变换的伪3D效果
// 一：水平移动
// translateX

// 二：垂直移动
// translateY

// 三：整体缩放
// scale

// 四：横向缩放
// scaleX

// 五：纵向缩放
// scaleY

// 六：X轴旋转
// rotateX

// 七：Y轴旋转
// rotateY

// 八：Z轴旋转
// rotateZ、rotate


const TransformAPI = () => {

  const onPress = () => { }

  return <View style={styles.root}>
    <Button title="按钮" onPress={onPress} />
    <View style={[{
      width: 100,
      height: 100,
      backgroundColor: "#3050ff",
      marginTop: 60,
      marginLeft: 60
    }, {
      transform: [
        // {
        //   translateX: 200
        // },
        // {
        //   translateY: 150
        // },
        // {
        //   scale: 1.5
        // }
        // {
        //   scaleX: 1.5
        // }
        // {
        //   scaleY: 1.5
        // }
        // {
        //   rotateX: "45deg"
        // }
        // {
        //   rotateY: "45deg"
        // }
        {
          rotate: "25deg"
        }
      ]
    }]}></View>
  </View>
}


export default TransformAPI

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingVertical: 20,
  },
});

