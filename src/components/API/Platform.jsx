import { useEffect } from 'react';

import { View, Dimensions, StyleSheet, Button, Platform } from 'react-native';

// Platform 获取平台属性
// 一：平台属性
// Platform.OS 获取平台属性
// Platform.Version 获取平台版本系统版本号
// Platform.constants 获取平台属性

// 二：平台属性判断
// Platform.isPad 判断是否是 iPad (只针对ios平台有用)
// Platform.isTv 判断是否是 TV

// 三：平台选择
// Platform.select(obj)

const PlatformAPI = () => {
  const onPress = () => {
    console.log(Platform.OS, 'Platform.OS');
    console.log(Platform.Version, 'Platform.Version');
    console.log(Platform.constants, 'Platform.constants');
    console.log(Platform.isPad, 'Platform.isPad');
    console.log(Platform.isTV, 'Platform.isTV');

    // 类似于js中的switch判断分支选择
    const style = Platform.select({
      android: {
        marginTop: 20,
      },
      ios: {
        marginTop: 0,
      },
      default: {
        marginTop: 10,
      },
    });

    console.log(style, 'style'); // { marginTop: 20 }
  };

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
    </View>
  );
};

export default PlatformAPI;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',

    // 利用Platform.select()实现不同平台下不同样式
    ...Platform.select({
      android: {
        paddingTop: 20,
      },
      ios: {
        paddingTop: 0,
      },
      default: {
        paddingTop: 10,
      },
    }),
  },
});
