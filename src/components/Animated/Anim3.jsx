import React, { useRef } from 'react'
import { StyleSheet, View, Button, Animated } from 'react-native'


// 平移动画的多种属性支持
// 一：
// marginLeft、marginRight、marginTop、marginBottom

// 二：
// translateX translateY

// 三：绝对定位
// left right top bottom


const Anim3 = () => {

  const marginLeft = useRef(new Animated.Value(0)).current

  return <View style={styles.root}>
    <Button title='按钮' onPress={() => {
      Animated.timing(marginLeft, { toValue: 300, duration: 500, useNativeDriver: false }).start()
    }} />

    <Animated.View
      style={[styles.view,
      // { marginTop: marginLeft },
      // { transform: [{ translateX: marginLeft }] }
      {
        position: 'absolute',
        top: marginLeft,
        left: marginLeft,
      }
      ]}
    ></Animated.View>
  </View >
}

export default Anim3

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