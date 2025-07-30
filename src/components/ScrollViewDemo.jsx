import React, { useRef } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  // View,
  TextInput,
  Button,
  // Dimensions,
} from 'react-native';

// ScrollView 基础滚动组件
// 一：添加子节点
// 固定子元素
// 列表渲染
// 数组渲染

// 二：内容包裹样式：contentContainerStyle

// 三：滚动键盘消失
// keyboardDismissMode:
// - 'none'：默认值，键盘不会自动消失
// - 'interactive'：键盘会自动消失，但用户可以手动滚动(ios中使用时，键盘会自动消失，且可以手动滚动)
// - 'on-drag'：当用户开始拖动时，键盘会自动消失

// 四：点击收起键盘
// keyboardShouldPersistTaps:
// - 'always'：点击任何地方都不会收起键盘
// - 'never'：点击有焦点的元素，会收起键盘，不会触发元素的点击事件
// - 'handled'：点击有焦点的元素，会触发焦点事件，不会收起键盘。点击外部才会收起键盘。

//  五：滚动开始与结束事件
// onMomentumScrollBegin：滚动开始时触发
// onMomentumScrollEnd：滚动结束时触发

// 六：滚动距离监听：
// onScroll (IOS:scrollEventThrottle)
// ios中要添加属性 scrollEventThrottle={16} 表示每16ms触发一次回调，不写这个属性，滚动过程中不会触发回调
// 垂直方向的滚动距离：event.nativeEvent.contentOffset.y
// 水平方向的滚动距离：event.nativeEvent.contentOffset.x

// 七：超出滚动
// overScrollMode:
// - 'always'：内容超出时会滚动，且在滚动到边界时会有回弹效果
// - 'never'：内容超出时不会滚动
// - 'auto'：默认值，内容超出时会滚动

// 八：分页滚动 && 滚动方向
// pagingEnabled: true (按照一页的宽度或高度进行滚动)
// horizontal: true

// 九：滚动开关
// scrollEnabled: false (禁用滚动)

// 十：初始滚动
// contentOffset: { x: 0, y: 0 } (设置初始滚动位置)

// 十一：是否展示滚动条
// showsVerticalScrollIndicator: true (垂直滚动条)
// showsHorizontalScrollIndicator: true (水平滚动条)

// 十二：吸顶元素
// stickyHeaderIndices: [0] (设置吸顶元素索引：ScrollView组件内部的元素索引值)

// 十三：ScrollView api
// scrollTo(options)
// scrollRef.current.scrollTo({
//   x: 0,
//   y: 500, 滚动距离
//   animated: true,
//  })
// scrollToEnd(options) 直接滚动到底部

// const { width } = Dimensions.get('window');
const ScrollViewDemo = () => {
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const scrollRef = useRef(null);

  const buildListView = () => {
    const list = [];
    for (let i = 0; i < 20; i++) {
      list.push(
        <Text key={i} style={styles.txt}>
          {`数组渲染：${i}`}
        </Text>,
      );
    }

    return list;
  };
  return (
    <ScrollView
      ref={scrollRef}
      style={styles.root}
      contentContainerStyle={styles.containerStyle}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      onMomentumScrollBegin={() => console.log('滚动开始')}
      onMomentumScrollEnd={() => console.log('滚动结束')}
      onScroll={event => {
        console.log(`滚动距离: ${event.nativeEvent.contentOffset.y}`);
      }}
      overScrollMode="always"
      // scrollEnabled={false}
      contentOffset={{ y: 100 }}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}
    >
      {/* 固定子元素 */}
      {/* <Text style={styles.txt}>1</Text>
      <Text style={styles.txt}>2</Text>
      <Text style={styles.txt}>3</Text>
      <Text style={styles.txt}>4</Text>
      <Text style={styles.txt}>5</Text>
      <Text style={styles.txt}>6</Text>
      <Text style={styles.txt}>7</Text>
      <Text style={styles.txt}>8</Text> */}

      {/* 列表渲染 */}
      {/* {array.map((item, index) => (
        <Text key={index} style={styles.txt}>
          {`列表渲染：${item}`}
        </Text>
      ))} */}
      <TextInput style={styles.input} />
      <Button
        title="按 钮"
        onPress={() => {
          // scrollRef.current.scrollTo({
          //   x: 0,
          //   y: 500,
          //   animated: true,
          // });

          scrollRef.current.scrollToEnd({
            animated: true,
          });
        }}
      />
      {/* 数组渲染 */}
      {buildListView()}
    </ScrollView>

    // <ScrollView
    //   style={{ width: '100%', height: 200 }}
    //   horizontal={true}
    //   pagingEnabled={true}
    // >
    //   <View style={{ width, backgroundColor: 'red', height: 200 }} />
    //   <View style={{ width, backgroundColor: 'blue', height: 200 }} />
    //   <View style={{ width, backgroundColor: 'green', height: 200 }} />
    // </ScrollView>
  );
};

export default ScrollViewDemo;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  txt: {
    height: 56,
    width: '100%',
    textAlignVertical: 'center',
    fontSize: 24,
    color: 'black',
  },

  containerStyle: {
    paddingHorizontal: 30,
    backgroundColor: '#E0E0E0',
    paddingTop: 20,
  },

  input: {
    height: 60,
    width: '100%',
    backgroundColor: '#ff000050',
  },
});
