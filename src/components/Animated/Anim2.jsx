import React, { useRef } from 'react'
import { StyleSheet, View, Button, Animated } from 'react-native'

// 四大动画类型
// 1.平移
// 2.旋转 rotate
// 3.缩放 scale
// 4.渐变


const Anim2 = () => {

  // 2.旋转
  // const rotate = useRef(new Animated.Value(0)).current
  // rotate 特殊需要用 interpolate 做映射
  // const rotateValue = rotate.interpolate({
  //   inputRange: [0, 45],
  //   outputRange: ['0deg', '45deg']
  // })

  // 3.缩放
  // const scale = useRef(new Animated.Value(1)).current


  // 4.渐变
  const opacity = useRef(new Animated.Value(1)).current


  const onPress = () => {
    // Animated.timing(rotate, { toValue: 45, duration: 1000, useNativeDriver: false }).start()
    // Animated.timing(scale, { toValue: 0.5, duration: 1000, useNativeDriver: false }).start()
    Animated.timing(opacity, { toValue: 0.1, duration: 1000, useNativeDriver: false }).start()
  }

  return <View style={styles.root}>
    <Button title='按钮' onPress={onPress} />

    <Animated.View
      style={[styles.view,
      // { marginLeft: marginLeft }
      // { transform: [{ rotate: `${rotate}deg` }] } 注意这样用模板字符串拼接会报错
      // { transform: [{ rotate: rotateValue }] } 旋转
      // { transform: [{ scale: scale }] } 缩放
      { opacity: opacity }
      ]
      }
    ></Animated.View>
  </View >
}

export default Anim2

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
    marginTop: 60,
    marginLeft: 60
  }
})