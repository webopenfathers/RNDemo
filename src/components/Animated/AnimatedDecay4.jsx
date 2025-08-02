import React, { useRef } from 'react'
import { StyleSheet, View, Button, Animated } from 'react-native'


// Animated.decay 衰减动画函数

// 一：
// velocity 初始速度 (值越小,动滑动的越近)

// 二：
// deceleration 衰减系数 (值越小,动画结束的越快)


const AnimatedDecay = () => {

  const marginLeft = useRef(new Animated.Value(0)).current

  return <View style={styles.root}>
    <Button title='按钮' onPress={() => {
      Animated.decay(marginLeft, {
        velocity: 1,
        deceleration: 0.995,
        useNativeDriver: false
      }).start()
    }} />

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