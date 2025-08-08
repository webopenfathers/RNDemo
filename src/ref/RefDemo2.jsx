import React, { useRef } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import CustomInput2 from './CustomInput2';

export default () => {
  const inputRef = useRef(null);

  return (
    <View style={styles.root}>
      <Button
        title="按钮"
        onPress={() => {
          // 让输入框获取焦点
          inputRef.current.focus();
        }}
      />
      <CustomInput2 cumRef={inputRef} />
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
