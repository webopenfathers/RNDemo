import React from 'react';

import { Button, View, StyleSheet } from 'react-native';

// Button 使用简单但样式固定
// 一：title：设置按钮的显示文字
// 二：color：设置按钮的颜色
// 三：disabled：设置按钮是否不可点击，true 时不可点击
// 四：onPress：设置按钮的点击事件

const ButtonDemo = () => {
  return (
    <View style={styles.root}>
      <Button
        title="按 钮"
        color={'green'}
        onPress={() => {
          console.log('按钮被点击了');
        }}
        disabled={true} // 设置为 true 时按钮不可点击
      />
    </View>
  );
};

export default ButtonDemo;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
  },
});
