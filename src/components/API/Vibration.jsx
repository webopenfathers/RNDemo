import { View, StyleSheet, Button, Vibration } from 'react-native'

// Vibration 简单好用的震动交互
// 一：原生申明权限 (AndroidManifest.xml中注册)
// android.permission.VIBRATE


// 二：发起震动
// Vibration.vibrate(震动时间)
// Vibration.vibrate(1000)

// 三：取消震动
// Vibration.cancel()

// 四：安卓时间模式
// [停100, 震500, 停200, 震500]
// Vibration.vibrate([100, 500, 200, 500])


// 五：IOS时间模式
// [停100震400,停200震400,停300震400,停400震400]
// Vibration.vibrate([100, 200, 300, 400])


// 六：重复震动
// repeat
// Vibration.vibrate([100, 200, 300, 400], true(repeat))

const VibrationAPI = () => {

  const onPress = () => {
    // 发起震动
    // Vibration.vibrate()
    // Vibration.vibrate(1000) // just android
    // 取消震动
    // Vibration.cancel()
    // 安卓时间模式
    // Vibration.vibrate([100, 500, 200, 500])

    // IOS时间模式
    // Vibration.vibrate([100, 200, 300, 400])

    // 六：重复震动
    // Vibration.vibrate([100, 200, 300, 400], true)
  }

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
    </View>
  )
}

export default VibrationAPI

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingVertical: 20,
  },

});