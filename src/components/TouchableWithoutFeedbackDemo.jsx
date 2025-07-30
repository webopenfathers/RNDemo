import React from 'react';

import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

// TouchableWithoutFeedback几乎不用的点击组件
// 一：所有点击类事件和TouchableOpacity相同,但不支持点击效果。
// 二：只支持一个子节点
// 三：且自身不支持样式

const TouchableWithoutFeedbackDemo = () => {
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

      <TouchableWithoutFeedback>
        <View style={styles.button2}>
          <Text style={styles.txt}>按钮</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TouchableWithoutFeedbackDemo;

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

  button2: {
    width: 300,
    height: 65,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
