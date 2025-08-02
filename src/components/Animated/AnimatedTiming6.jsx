import React, { useRef } from 'react'
import { StyleSheet, View, Button, Animated, Easing } from 'react-native'


// Animated.timing 时间动画函数
// 一：easing 时间动画函数
// 1.1 四种内置动画
// Easing.back(3) 回拉
// Easing.bounce 弹跳(不会超过最大距离)
// Easing.ease  平缓
// Easing.elastic(3) 弹性(会超过最大距离)


// 1.2 三种标准函数
// Easing.linear 一次方函数
// Easing.quard 二次方函数
// Easing.cubic 三次方函数


// 1.3 四种补充函数
// Easing.bezier(0,0,1,1) 贝塞尔曲线
// Easing.circle 环形
// Easing.sin 正弦
// Easing.exp 指数

// 二:自由组合动画函数
// Easing.in(Easing.bounce) 加速+弹跳
// Easing.out(Easing.exp) 减速+指数
// Easing.inOut(Easing.elastic(1)) 加减速+弹性


const AnimatedTiming = () => {

  const marginLeft = useRef(new Animated.Value(0)).current

  const onPress = () => {
    Animated.timing(marginLeft, {
      toValue: 300,
      duration: 500,
      // easing: Easing.back(3), 回拉
      // easing: Easing.ease, 平缓
      // easing: Easing.bounce, 弹跳
      // easing: Easing.elastic(3), 弹性

      // easing: Easing.linear,
      // easing: Easing.quad,
      // easing: Easing.cubic,

      // easing: Easing.bezier(0.8, 0.74, 0.9, 0.25),
      // easing: Easing.circle,
      // easing: Easing.sin,
      // easing: Easing.exp,

      // easing: Easing.in(Easing.bounce),
      // easing: Easing.out(Easing.exp),
      easing: Easing.inOut(Easing.elastic(3)),
      useNativeDriver: false
    }).start()
  }

  return <View style={styles.root}>
    <Button title='按钮' onPress={onPress} />
    <Animated.View
      style={[styles.view, { marginLeft: marginLeft }]}
    ></Animated.View>
  </View >
}

export default AnimatedTiming

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingVertical: 20
  },

  view: {
    width: 100,
    height: 100,
    backgroundColor: "#3050ff",
    marginTop: 20
  }
})