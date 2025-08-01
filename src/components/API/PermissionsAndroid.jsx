import { View, PermissionsAndroid, StyleSheet, Button } from 'react-native';

// PermissionsAndroid 轻松解决权限问题

// 一：检查权限
// PermissionsAndroid.check('权限名称') 返回promise
// const needPermission = 'android.permission.WRITE_EXTERNAL_STORAGE';
// const right = await PermissionsAndroid.check(needPermission); boolean

// 二：申请权限
// PermissionsAndroid.request('权限名称')  返回promise
// -切记原生manifest注册权限

// 三：申请多个权限
// PermissionsAndroid.requestMultiple()

const PermissionsAndroidAPI = () => {
  const onPress = async () => {
    // const needPermission = 'android.permission.WRITE_EXTERNAL_STORAGE';
    // // 检查权限
    // const right = await PermissionsAndroid.check(needPermission);
    // console.log(right, 'right');
    // if (!right) {
    //   //  申请权限
    //   const status = await PermissionsAndroid.request(needPermission);
    //   console.log(status, 'status');
    //   if (status === 'granted') {
    //     // 获得
    //     console.log('获得', status);
    //   } else if (status === 'denied') {
    //     // 拒绝
    //     console.log('拒绝', status);
    //   }
    // }

    // 申请多个权限
    const right = await PermissionsAndroid.requestMultiple([
      'android.permission.READ_EXTERNAL_STORAGE',
      'android.permission.WRITE_EXTERNAL_STORAGE',
    ]);
    console.log(right, 'right');
  };

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
    </View>
  );
};

export default PermissionsAndroidAPI;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingVertical: 20,
  },
});
