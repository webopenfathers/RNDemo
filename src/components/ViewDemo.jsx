import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';

// onLayout：布局信息的回调 {
//     "layout": {
//         "x": 0,
//         "y": 0,
//         "width": 100.19047546386719,
//         "height": 200
//     },
//     "target": 12
// }

// setNativeProps：性能瓶颈下的选择余地(原生方法)，state改变样式性能较差
// 因为state改变整个页面需要重新渲染，而setNativeProps是直接修改样式不需要重新渲染整个页面，性能更高。

const ViewDemo = () => {
  const viewRef = useRef(null);
  const [height, setHeight] = useState(100);

  // setNativeProps举例
  useEffect(() => {
    setTimeout(() => {
      viewRef.current.setNativeProps({
        style: { backgroundColor: 'blue' },
      });
    }, 2000);
  }, []);

  // onLayout举例
  useEffect(() => {
    setTimeout(() => {
      setHeight(200);
    }, 1000);
  }, []);

  return (
    <View style={styles.root}>
      <View
        ref={viewRef}
        style={[styles.subView, { height }]}
        onLayout={e =>
          console.log(e.nativeEvent.layout, 'e.nativeEvent.layout')
        }
      />
    </View>
  );
};

export default ViewDemo;

// flexGrow：把父布局的剩余宽度进行分配+每一个原来自身的宽度
// flex：不管自身宽度如何，把父布局所有的宽度，按照比例进行分配
const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: '#C0C0C0',
  },

  subView: {
    width: 100,
    height: 50,
    backgroundColor: 'red',
  },
});
