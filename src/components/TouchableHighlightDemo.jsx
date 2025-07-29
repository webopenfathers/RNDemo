import React from 'react';

import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

// TouchableHighlight使用略显麻烦的点击组件(布局相关和View组件一样)

// 一：所有点击类事件和TouchableOpacity相同
// 二：只支持一个子节点
// 三：使用陷阱：必须复写onPress方法
// 四：underlayColor属性：设置按下时的背景颜色

const TouchableHeightlightDemo = () => {
  return (
    <View style={styles.root}>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          console.log('onPress');
        }}
        underlayColor="#00bcd4"
      >
        <Text style={styles.txt}>按钮</Text>
      </TouchableHighlight>
    </View>
  );
};

export default TouchableHeightlightDemo;

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
