import { useEffect } from 'react';
import { View, StyleSheet, Button, BackHandler } from 'react-native';

import { useBackHandler } from '@react-native-community/hooks';

// BackHandler 安卓返回键适配
// 一：添加监听
// BackHandler.addEventListener()

// 二：移除监听
// BackHandler.removeEventListener()

// 三：退出应用
// BackHandler.exitApp()

// 四：社区hook

const BackHandlerAPI = () => {
  useBackHandler(() => {
    return true;
  });

  useEffect(() => {
    console.log('开始');

    // const subscription = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   backForAndroid,
    // );

    return () => {
      console.log('结束');
      // subscription.remove();
    };
  }, []);

  // const backForAndroid = () => {
  //   return false; // false 不拦截返回键
  //   // return true; // true 拦截返回键
  // };

  const onPress = () => {
    BackHandler.exitApp();
  };
  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
    </View>
  );
};

export default BackHandlerAPI;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingVertical: 20,
  },
});
