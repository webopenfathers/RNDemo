import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TimerView = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // 方法一：使用useEffect，并在依赖数组中添加依赖，消除闭包问题
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter2(counter2 + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [counter2]);

  // 方法二：使用useState的函数式更新，消除闭包问题
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.titleTxt}>RN 计数器</Text>
      <Text style={styles.countTxt}>{counter}</Text>
      <Text style={styles.countTxt}>{counter2}</Text>
    </View>
  );
};
export default TimerView;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#353535',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleTxt: {
    marginTop: 96,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  countTxt: {
    marginTop: 64,
    fontSize: 96,
    fontWeight: 'bold',
    color: '#1876ff',
  },
});
