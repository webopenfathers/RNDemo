import { View, StyleSheet, Button, Linking, Platform } from 'react-native';

// Linking 一个 api 节省 50 行代码
// 一：打开链接：openURL() canOpenURL()(判断当前URL是否是一个合法的URL)
// 网页链接 Linking.openURL('https://www.baidu.com')
// 地图定位 Linking.openURL('geo:纬度, 经度')
// 拨打电话 Linking.openURL('tel:10086')
// 发送短信 Linking.openURL('smsto:10086')
// 发送邮件 Linking.openURL('mailto:10086@163.com')
// 应用跳转 Linking.openURL('zbw://demo')

// 二：跳转应用设置页面
// Linking.openSettings()

// 三：安卓隐式跳转
// Linking.sendIntent()
// if (Platform.OS === 'android') {
//   Linking.sendIntent('com.zbw.demo.test', [
//     { key: 'name', value: 'zhansan' },
//   ]);
// }

// 四：获取初始化url
// getInitialURL()

const LinkingAPI = () => {
  const onPress = async () => {
    // 1.跳转网页链接
    // const res = await Linking.canOpenURL('https://www.baidu.com');
    // if (res) {
    //   Linking.openURL('https://www.baidu.com');
    // }
    // 2.跳转地图定位 Linking.openURL('geo:纬度, 经度')
    // Linking.openURL('geo:37.422, -122.084');
    // 3.拨打电话
    // Linking.openURL('tel:10086');
    // 4.发送短信
    // Linking.openURL('smsto:10086');
    // 5.发送邮件
    // Linking.openURL('mailto:10086@163.com');
    // 6.应用跳转
    // Linking.openURL('zbw://demo?name=张三');
    // 7.跳转到应用设置
    // Linking.openSettings();

    // 8.安卓隐式跳转
    // if (Platform.OS === 'android') {
    //   Linking.sendIntent('com.zbw.demo.test', [
    //     { key: 'name', value: 'zhansan' },
    //   ]);
    // }

    console.log(Linking.getInitialURL(), 'Linking.getInitialURL()');
  };
  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
    </View>
  );
};

export default LinkingAPI;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingVertical: 20,
  },
});
