import React, { useEffect, useRef, useState } from 'react';

import {
  View,
  StyleSheet,
  Text,
  SectionList,
  RefreshControl,
} from 'react-native';
import { SectionData } from '../constants/Data';

// SectionList 多类型分组列表
// 一：基础使用
// sections: 数据源 [{},{}]
// renderItem: 渲染列表项的函数
// keyExtractor: 列表项的 key

// 二：ScrollView属性：
// 内容容器: contentContainerStyle
// 滚动条： showsVerticalScrollIndicator / showsHorizontalScrollIndicator
// 滚动监听：onScroll
// 键盘模式等：keyboardDismissMode keyboardShouldPersistTaps

// 三：表头
// ListHeaderComponent

// 四：表尾
// ListFooterComponent

// 五：分组头部
// renderSectionHeader

// 六：分割线元素
// ItemSeparatorComponent

// 七：分组吸顶
// stickSectionHeadersEnabled

// 八：滚动api
// scrollToLocation({
//   sectionIndex: 0, // 分组索引
//   itemIndex: 0, // 此分组中元素索引(注意：索引为0的起始元素是sectionHeader)
// })

// 九：RefreshControl 下拉刷新
// 1、下拉刷新(这两个属性是 RefreshControl 组件的属性)
// refreshing：当前是否正在刷新
// onRefresh: 下拉刷新时触发(请求第一页数据)

// 2.上拉加载更多(这两个属性是  SectionList FlatList 组件的属性)
// onEndReached: 触底时触发(请求下一页数据)
// onEndReachedThreshold: 触底时触发的阈值(默认0.5)
// 例：onEndReachedThresholf={0.2} 表示距离页面底部，还剩整个屏幕的 1/5 时触发onEndReached

const SectionListDemo = () => {
  const sectionListRef = useRef(null);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      sectionListRef.current.scrollToLocation({
        sectionIndex: 1, // 分组索引
        itemIndex: 4, // 分组元素索引(注意：索引起始是从sectionHeader开始)
        viewPosition: 0, // 0.5表示在中间位置
        animated: true,
      });
    }, 2000);
  }, []);
  const renderItem = ({ item, index, section }) => {
    return <Text style={styles.txt}>{item}</Text>;
  };

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

  const renderSectionHeader = ({ section }) => {
    return <Text style={styles.sectionHeader}>{section.type}</Text>;
  };

  const separatorComponent = () => <View style={styles.separator} />;

  return (
    <SectionList
      ref={sectionListRef}
      style={styles.sectionList}
      sections={SectionData}
      renderItem={renderItem}
      ListFooterComponent={ListFooter}
      ListHeaderComponen
      t={ListHeader}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item, index) => `${item}-${index}`}
      contentContainerStyle={styles.containerStyle}
      showsVerticalScrollIndicator={false}
      onScroll={e => {
        console.log(`onScroll: ${e.nativeEvent.contentOffset.y}`);
      }}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      ItemSeparatorComponent={separatorComponent}
      stickySectionHeadersEnabled={true}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            console.log('onRefresh...');
            setRefreshing(true);
            // do request new data
            setTimeout(() => {
              setRefreshing(false);
            }, 5000);
          }}
        />
      }
      onEndReached={() => {
        console.log('onEndReached...');
        // do request next page data
      }}
      // 0-1之间
      // 0.2 表示距离页面底部，还剩整个屏幕的 1/5 时触发onEndReached
      onEndReachedThresholf={0.2}
    />
  );
};

export default SectionListDemo;

const styles = StyleSheet.create({
  sectionList: {
    width: '100%',
    height: '100%',
  },

  txt: {
    width: '100%',
    height: 56,
    fontSize: 20,
    paddingLeft: 16,
    color: '#333',
    textAlignVertical: 'center',
  },

  containerStyle: {
    // paddingTop: 20,
    // paddingHorizontal: 10,
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

  sectionHeader: {
    width: '100%',
    height: 36,
    backgroundColor: '#DDDDDD',
    textAlignVertical: 'center',
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
});
