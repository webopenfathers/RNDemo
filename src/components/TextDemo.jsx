import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

// 一：行数及修饰模式
// numberOfLines：超出部分(行数)会省略号
// ellipsizeMode：省略号位置(头部，尾部，中间，clip裁剪)

// 二：是否可选中以及选中色号
// selectable：是否可选中
// selectionColor：选中色号

// 三：点击和长按
// onPress：点击事件(页面中的 链接或短链)
// onLongPress：长按事件

// 四：跟随系统字号：
// allowFontScaling： 跟随系统字号(boolean，场景绝大多数场景都是true)

// 五：文字嵌套及注意事项

// 六：文本对齐
// textAlign：文本水平对齐(left, center, right)
// textAlignVertical：文本垂直对齐(top, center, bottom)

// 七：文本装饰(必须两个联合使用)
// textDecorationLine：文本装饰线(none, underline, line-through, underline line-through)
// textDecorationStyle：文本装饰线样式(solid, dotted, dashed)

// 八：文字阴影(必须三个联合使用)
// textShadowColor：'#808080' 阴影颜色
// textShadowOffset：{ width: 2, height: 4 } 阴影偏移
// textShadowRadius：8 阴影半径

const TextDemo = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.txt}>本次期末考试</Text>
    </View>
  );
};

export default TextDemo;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
  },

  txt: {
    fontSize: 40,
    color: '#3025ff',
    textShadowColor: '#808080',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 8,
  },
});
