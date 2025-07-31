import { useState } from 'react';
import { View, StyleSheet, Switch } from 'react-native';

// Switch 开关切换
// 一：指定开关
// value

// 二：状态回调
// onValueChange

// 三：禁用
// disabled

// 四：背景颜色
// trackColor={{ true: 'green', false: 'gray' }}
// true 为开着的颜色
// false 为关着的颜色

// 五：按钮颜色
// thumbColor={'red'}

const SwitchDemo = () => {
  const [switchValue, setSwitchValue] = useState(true);
  return (
    <View style={styles.root}>
      <Switch
        disabled={false}
        value={switchValue}
        onValueChange={value => setSwitchValue(value)}
        trackColor={{ true: 'green', false: '#808080' }}
        thumbColor={switchValue ? '#2030ff' : '#303030'}
      />
    </View>
  );
};

export default SwitchDemo;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 200,
    width: '100%',
    height: '100%',
  },
});
