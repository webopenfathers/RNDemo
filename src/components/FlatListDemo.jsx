import { useRef, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// FlatList：高性能列表组件
// 一：基础使用
// data：数据源
// renderItem：渲染每一项的函数
// keyExtractor：每一项的唯一标识符

// 二：ScrollView属性：
// 内容容器：contentContainerStyle
// 滚动条
// 滚动监听
// 键盘模式等

// 三：横向滚动
// horizontal：是否横向滚动

// 四：表头
// ListHeaderComponent：表头组件
// ListFooterComponent：表尾组件

// 五：空元素
// ListEmptyComponent：空元素组件(data为空时显示)

// 六：分割线元素
// ItemSeparatorComponent：分割线组件

// 七：初始渲染元素
// initialNumToRender：初始渲染元素个数

// 八：反向
// inverted：是否反向渲染（从底部开始）

// 九：多列排布
// numColumns：每行显示的列数

// 十：可见元素回调
// onViewableItemsChanged：可见元素回调(每次滚动都会显示最新一屏出现的元素)

// 十一：滚动到指定元素
// scrollToIndex：滚动到指定索引的元素
// scrollToItem：滚动到指定元素(不推荐)

// 十二：滚动到指定距离
// scrollToOffset：滚动到指定的偏移量

// 十三：滚动到底部
// scrollToEnd：滚动到底部

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23,
];
const FlatListDemo = () => {
  const flatListRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // 十：滚动到指定索引的元素(index)
      // index: 要滚动到的元素索引
      // viewPosition: 0.5表示滚动到屏幕中间位置，0表示顶部，1表示底部
      // animated: 是否动画滚动
      // flatListRef.current.scrollToIndex({
      //   index: 10,
      //   viewPosition: 0.5, // 0.5表示滚动到屏幕中间位置
      //   animated: true, // 是否动画滚动
      // });
      // 十一：滚动到指定元素(item)
      // flatListRef.current.scrollToItem({
      //   item: 5, // 要滚动到的item值
      //   viewPosition: 0,
      //   animated: true,
      // });
      // 十二：滚动到指定的偏移量(offset像素)
      // flatListRef.current.scrollToOffset({
      //   offset: 100,
      //   animated: true,
      // });
      // 十三：滚动到底部
      flatListRef.current.scrollToEnd({
        animated: true,
      });
    }, 2000);
  });
  const renderItem = ({ item }) => {
    return <Text style={styles.txt}>{`Item ${item}`}</Text>;
  };

  // const renderItem2 = ({ item }) => {
  //   return <Text style={styles.txt2}>{`Item ${item}`}</Text>;
  // };

  const ListHeader = (
    <View style={styles.header}>
      <Text style={styles.extraTxt}>列表头部</Text>
    </View>
  );
  const ListFooter = (
    <View style={[styles.header, styles.footer]}>
      <Text style={styles.extraTxt}>列表尾部</Text>
    </View>
  );

  const ListEmpty = (
    <View style={styles.listEmpty}>
      <Text style={styles.extraTxt}>暂时无数据哦~</Text>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      keyExtractor={(_, index) => `item-${index}`}
      style={styles.flatList}
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.containerStyle}
      showsVerticalScrollIndicator={false}
      onScroll={e => {
        console.log(`onScroll: ${e.nativeEvent.contentOffset.y}`);
      }}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      ListFooterComponent={ListFooter}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={ListEmpty}
      ItemSeparatorComponent={<View style={styles.separator} />}
      initialNumToRender={16}
      inverted={false}
      numColumns={1}
      onViewableItemsChanged={({ viewableItems }) => {
        console.log('可见元素:', viewableItems);
      }}
    />

    // <FlatList
    //   horizontal={true}
    //   keyExtractor={(_, index) => `item-${index}`}
    //   style={styles.flatList}
    //   data={data}
    //   renderItem={renderItem2}
    // />
  );
};

export default FlatListDemo;

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    height: '100%',
  },

  txt: {
    width: '100%',
    height: 50,
    // backgroundColor: '#f0f0f0',
    textAlignVertical: 'center',
  },

  txt2: {
    width: 200,
    height: 200,
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    textAlignVertical: 'center',
  },

  containerStyle: {
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },

  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#00ff0030',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    backgroundColor: '#ff000030',
  },

  extraTxt: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#666',
  },

  listEmpty: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },

  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
});
