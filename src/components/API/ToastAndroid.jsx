import { View, StyleSheet, Button, ToastAndroid } from 'react-native'

// ToastAndroid 安卓平台的提示
// 一：弹出提示：
// ToastAndroid.show(message,duration)
// ToastAndroid.show('这是一个提示', 1000)


// 二：弹出提示(指定弹出位置)
// ToastAndroid.showWithGravity()
// ToastAndroid.showWithGravity('这是一个提示', ToastAndroid.SHORT, ToastAndroid.CENTER)

// 三：偏移量
// ToastAndroid.showWithGravityAndOffset()
// ToastAndroid.showWithGravityAndOffset('这是一个提示', ToastAndroid.SHORT, ToastAndroid.CENTER, 200, 100)


const ToastAndroidAPI = () => {

  const onPress = () => {
    // ToastAndroid.show('这是一个提示', 500)
    // ToastAndroid.showWithGravity('这是一个提示', ToastAndroid.SHORT, ToastAndroid.CENTER)

    ToastAndroid.showWithGravityAndOffset('这是一个提示', ToastAndroid.SHORT, ToastAndroid.CENTER, 200, 100)
  }

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
    </View>
  )
}

export default ToastAndroidAPI

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingVertical: 20,
  },
});