import { View, Text, Button, StyleSheet } from 'react-native';

// StyleSheet 构建灵活样式表
// 1.基础使用

// 2.创建多个样式表(每个函数中单独定义一个样式表)

// 3.样式合并
// StyleSheet.compose(style1, style2)和[]写法的区别
// 某种程度来说StyleSheet.compose比[]更好，可以减少数组的重绘

// 4.样式平铺
// 样式属性相同的，后面会覆盖前面的属性，且为对象类型
// StyleSheet.flatten([style1, style2])
// const flattenStyle = StyleSheet.flatten([s1, s2]);
// 输出结果 { fontSize: 20, color: 'red' }
// console.log(flattenStyle, 'flattenStyle');

// 5.绝对填充
// StyleSheet.absoluteFill
// const absoluteFill = StyleSheet.absoluteFill;
// 输出结果 { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 } 铺满全屏

// 6.头发丝尺寸(1个像素)
// StyleSheet.hairlineWidth
// 输出结果 0.380952 === (1 / Dimensions.get('screen').scale)

const StyleSheetAPI = () => {
  const onPress = () => {
    const s1 = {
      fontSize: 18,
    };

    const s2 = {
      fontSize: 20,
      color: 'red',
    };

    // 3.样式合并
    // const composeStyle = StyleSheet.compose(s1, s2);
    // 打印结果
    // [
    //   {
    //     fontSize: 18,
    //   },
    //   {
    //     fontSize: 20,
    //     color: 'red',
    //   },
    // ];
    // console.log(composeStyle, 'composeStyle');

    // 4.样式平铺；(样式属性相同的，后面会覆盖前面的属性，且为对象类型)
    // const flattenStyle = StyleSheet.flatten([s1, s2]);
    // 输出结果 { fontSize: 20, color: 'red' }
    // console.log(flattenStyle, 'flattenStyle');

    // 5.绝对填充
    // StyleSheet.absoluteFill
    // 输出结果  { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }
    // console.log(StyleSheet.absoluteFill, 'StyleSheet.absoluteFill');

    // 6.头发丝尺寸
    // StyleSheet.hairlineWidth
    // 输出结果 0.380952
    console.log(StyleSheet.hairlineWidth, 'StyleSheet.hairlineWidth');
  };
  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
      <View style={styles.test}></View>
    </View>
  );
};

export default StyleSheetAPI;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingVertical: 20,
  },

  test: {
    // ...StyleSheet.absoluteFill,
    backgroundColor: '#ff000030',
  },
});
