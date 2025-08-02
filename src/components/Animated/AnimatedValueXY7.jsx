import React, { useRef } from 'react'
import { StyleSheet, View, Button, Animated, Easing } from 'react-native'


// Animated.ValueXY 矢量动画
// Animated.ValueXY({ x: number, y: number })

const AnimatedValueXY = () => {

  const vector = useRef(new Animated.ValueXY({ x: 0, y: 10 })).current

  const onPress = () => {
    Animated.timing(vector, {
      toValue: {
        x: 300,
        y: 400
      },
      duration: 500,
      useNativeDriver: false
    }).start()
  }

  return <View style={styles.root}>
    <Button title='按钮' onPress={onPress} />

    <Animated.View
      style={[styles.view, { marginLeft: vector.x, marginTop: vector.y }]}
    ></Animated.View>
  </View >
}

export default AnimatedValueXY

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