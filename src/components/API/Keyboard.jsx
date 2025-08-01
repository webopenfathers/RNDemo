import { useEffect } from 'react';
import { View, StyleSheet, Button, Keyboard, TextInput } from 'react-native'

// Keyboard 键盘操作有神器
// 一：注册键盘监听
// Keyboard.addListener()

// 二：注销键盘监听
// EmitterSubscription.remove()

// 三：隐藏键盘事件
// Keyboard.dismiss()


const KeyboardAPI = () => {


  useEffect(() => {
    // 监听：键盘出现事件
    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardShow)
    // 监听：键盘隐藏事件
    const hideSubscription = Keyboard.addListener("keyboardDidHide", onKeyboardHide)

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  const onKeyboardShow = () => {
    console.log('键盘出现');

  }

  const onKeyboardHide = () => {
    console.log('键盘隐藏');
  }

  const onPress = () => {
    Keyboard.dismiss()
  }

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
      <TextInput style={{
        width: '100%',
        height: 56,
        backgroundColor: '#E0E0E0'
      }} />
    </View>
  );
}

export default KeyboardAPI

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingVertical: 20,
  },
});
