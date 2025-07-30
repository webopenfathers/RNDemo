import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// 强大的Pressable 组件可以替代 Touchable 系列组件
// 一：点击类事件和其他点击组件一致

// 二：带状态样式:
// style={state => {
// state 是 Pressable 的状态对象，包含 pressed 等属性
// 可以根据 pressed 状态来改变样式
// pressed 是一个布尔值，表示是否被按下
//   const { pressed } = state;
//   return {
//     width: 300,
//     height: 65,
//     backgroundColor: pressed ? 'white' : '#2030FF',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   };
// }}

// 三：带状态的子节点
// {
//   state => {
//     const { pressed } = state;
//     return <Text style={pressed ? styles.txtPressed : styles.txt}>按 钮</Text>;
//   };
// }

// 四：代码简写

const PressableDemo = () => {
  return (
    <View style={styles.root}>
      {/* 带状态样式 */}
      <Pressable
        style={state => [styles.button, state.pressed && styles.buttonPressed]}
      >
        {/* 带状态的子节点 */}
        {state => (
          <Text style={state.pressed ? styles.txtPressed : styles.txt}>
            按 钮
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default PressableDemo;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#A0A0A0',
    padding: 20,
  },

  button: {
    width: 300,
    height: 65,
    borderRadius: 10,
    backgroundColor: '#2030FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonPressed: { backgroundColor: 'white' },

  txt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  txtPressed: {
    fontSize: 20,
    color: '#2030FF',
    fontWeight: 'bold',
  },
});
