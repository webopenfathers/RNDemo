import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const AlertAndConsole = () => {
  return (
    <View style={{ width: '100%', height: '100%', paddingVertical: 20 }}>
      <Button
        title="按钮"
        onPress={() => {
          // 一：alert
          // alert('提示');
          // 二：Alert
          // const buttons = [
          //   {
          //     text: '取消',
          //     onPress: () => {
          //       console.log('取消');
          //     },
          //   },
          //   {
          //     text: '确定',
          //     onPress: () => {
          //       console.log('确定');
          //     },
          //   },
          // ];
          // Alert.alert('提示', '这是按钮', buttons);
          // 三：console
          // console.log('这是普通的日志输出');
          // 四：console 日志输出分级
          // console.log('这是普通的日志输出');
          // console.info('信息日志输出');
          // console.debug('调试日志输出');
          // console.warn('警告日志输出');
          // console.error('错误日志输出');
          // 五：console.log 字符串和占位符的三种方式：%o(对象占位)、%s(字符串占位)、%d(数值占位)
          // console.log('我是个人开发者%s,我学习RN%d年半了', '张三', 2);
          // console.log('我是一个对象：%o', { name: '张三', age: 18 });
          // 六：console.log 添加样式：%c---颜色和字号
          // color:red
          // font-size:x-large x-medium x-small
          // console.log(
          //   '%c这行日志红色文字，字号大',
          //   'color:red;font-size:x-large',
          // );
          // console.log(
          //   '%c这行日志蓝色文字，字号中',
          //   'color:blue;font-size:x-medium',
          // );
          // console.log(
          //   '%c这行日志绿色文字，字号小',
          //   'color:blue;font-size:x-small',
          // );
          // 七：console.log输出组件树
          // const viewLayout = (
          //   <View style={{ flexDirection: 'column' }}>
          //     <Text style={{ fontSize: 20, color: 'red' }}>Hello World</Text>
          //   </View>
          // );
          // console.log('组件树：', viewLayout);
          // 八：console.log输出表格日志
          // const users = [
          //   { name: '张三', age: 12, hobby: '唱歌' },
          //   { name: '李四', age: 15, hobby: '跳舞' },
          //   { name: '王五', age: 18, hobby: '打篮球' },
          // ];
          // console.table(users);
          // 九：console.log输出分组日志
          console.group();
          console.log('第1行日志');
          console.log('第2行日志');
          console.log('第3行日志');
          console.group();
          console.log('二级分组第1行日志');
          console.log('二级分组第2行日志');
          console.log('二级分组第3行日志');
          console.groupEnd();
          console.groupEnd();
        }}
      />
    </View>
  );
};

export default AlertAndConsole;
