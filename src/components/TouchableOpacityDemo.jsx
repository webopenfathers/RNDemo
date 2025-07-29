import React from 'react';

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

// TouchableOpacity最好用的点击组件(布局相关和View组件一样)

// 一：透明度渐变阈值：activeOpacity
// activeOpacity={x} 设置点击时的不透明度，不透明度变化范围是x到1之间

// 二：点击事件：onPress onLongPress  delayLongPress
// onPress：点击事件
// onLongPress：长按事件
// delayLongPress：长按延迟时间

// 三：点击事件起止：onPressIn onPressOut
// onPressIn：按下事件
// onPressOut：松开事件

const TouchableOpacityDemo = () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7} // 设置点击时的透明度
        onPress={() => console.log('onPress点击了')}
        onLongPress={() => console.log('onLongPress长按了')}
        delayLongPress={1000}
        onPressIn={() => console.log('onPressIn按下了')}
        onPressOut={() => console.log('onPressOut抬起了')}
      >
        <Text style={styles.txt}>按钮</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableOpacityDemo;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
  },

  button: {
    width: 300,
    height: 65,
    backgroundColor: '#2030FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
