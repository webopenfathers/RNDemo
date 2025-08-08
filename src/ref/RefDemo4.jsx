import React, { useRef } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import CustomInput4 from './CustomInput4';

export default () => {
  const inputRef = useRef(null);

  return (
    <View style={styles.root}>
      <Button
        title="聚焦"
        onPress={() => {
          // 让输入框获取焦点
          inputRef.current.customFocus();
        }}
      />
      <Button
        title="失焦"
        onPress={() => {
          // 让输入框失焦
          inputRef.current.customBlur();
          inputRef.current.customXXX();
        }}
      />
      <CustomInput4 ref={inputRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 64,
  },
});
