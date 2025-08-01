import React, { useRef } from 'react'
import { StyleSheet, View, Button, Animated } from 'react-native'


// 简单示例学习基础动画方法
// 第一步：用Animated.View替代原来的View

// 第二步：动画值要用 new Animated.Value 定义 useRef(new Animated.Value(0)).current

// 第三步：启动动画
// Animated.timing(动画值,{toValue:要变化的值,duration:动画执行时长,useNativeDriver:是否启用原生动画}).start()
// Animated.timing(marginLeft, { toValue: 300, duration: 500, useNativeDriver: false }).start()

const Anim1 = () => {

  const marginLeft = useRef(new Animated.Value(0)).current

  return <View style={styles.root}>
    <Button title='按钮' onPress={() => {
      Animated.timing(marginLeft, { toValue: 300, duration: 500, useNativeDriver: false }).start()
    }} />

    <Animated.View
      style={[styles.view, { marginLeft: marginLeft }]}
    ></Animated.View>
  </View >
}

export default Anim1

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