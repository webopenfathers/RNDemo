import React, { useRef } from 'react'
import { StyleSheet, View, Button, Animated, Easing } from 'react-native'


// 四种组合动画
// 一：并发
// Animated.parallel([动画1,动画2,动画2]).start()

// 二：串行/序列
// Animated.sequence([动画1,动画2,动画2]).start()

// 三：有序/交错(每个动画执行中间会间隔500ms)
//  Animated.stagger(500, [动画1,动画2,动画2]).start()

// 四：延迟 (比 三 更灵活)
// Animated.delay()
// Animated.sequence([moveX, Animated.delay(500), moveY, Animated.delay(500), scaleAnim]).start()
// Animated.sequence([动画1, 延迟时间, 动画2, 延迟时间, 动画3]).start()

const Anim8 = () => {
  const scale = useRef(new Animated.Value(1)).current
  const marginLeft = useRef(new Animated.Value(0)).current
  const marginTop = useRef(new Animated.Value(0)).current

  const onPress = () => {
    const moveX = Animated.timing(marginLeft, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false
    })

    const moveY = Animated.timing(marginTop, {
      toValue: 300,
      duration: 500,
      useNativeDriver: false
    })

    const scaleAnim = Animated.timing(scale, {
      toValue: 1.5,
      duration: 500,
      useNativeDriver: false
    })


    // 并行
    // Animated.parallel([moveX, moveY, scaleAnim]).start()

    // 串行
    // Animated.sequence([moveX, moveY, scaleAnim]).start()

    // 有序/交错(每个动画执行中间会间隔1500ms)
    // Animated.stagger(1500, [moveX, moveY, scaleAnim]).start()

    // Animated.delay() 延迟
    Animated.sequence([moveX, Animated.delay(1500), moveY, Animated.delay(500), scaleAnim]).start()

  }

  return <View style={styles.root}>
    <Button title='按钮' onPress={onPress} />

    <Animated.View
      style={[styles.view, { transform: [{ scale: scale }, { translateX: marginLeft }, { translateY: marginTop }] }]}
    ></Animated.View>
  </View >
}

export default Anim8

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