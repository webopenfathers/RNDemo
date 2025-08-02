import React, { useRef } from 'react'
import { StyleSheet, View, Button, Animated } from 'react-native'


// Animated.spring 弹性动画函数
// 一：
// toValue 目标值

// 二：弹性模型 三组配置
// 2.1
// bounciness (弹性)：控制弹性，越大越弹，默认值 8
// speed (速度)：控制“弹”的速度，默认值 12

// 2.2
// tension (张力)：控制速度，越大速度越快，默认值40
// friction (摩擦)：控制弹性与过冲，越小越弹，默认值7

// 2.3
// stiffness (刚度)：弹簧刚度系数，越大越弹，默认值100
// damping (阻尼)：弹簧运动因摩擦力而受到阻尼，越小越弹，默认值10
// mass (质量)：附着在弹簧末端的物体的质量，越大惯性越大，动画越难停下，越小惯性越小，动画很快停下，默认值1



const AnimatedDecay = () => {

  const marginLeft = useRef(new Animated.Value(0)).current

  const onPress = () => {
    Animated.spring(marginLeft, {
      toValue: 200,
      useNativeDriver: false,


      // 第一组配置
      // bounciness: 15,
      // speed:2


      // 第二组配置
      // tension: 40,
      // friction: 7

      stiffness: 100,
      damping: 10,
      mass: 1
    }).start()
  }

  return <View style={styles.root}>
    <Button title='按钮' onPress={onPress} />
    <Animated.View
      style={[styles.view, { marginLeft: marginLeft }]}
    ></Animated.View>
  </View >
}

export default AnimatedDecay

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