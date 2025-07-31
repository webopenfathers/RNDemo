import React, { useRef } from 'react';

import { View, StyleSheet, Text, SectionList, StatusBar } from 'react-native';
import { SectionData } from '../constants/Data';

// StatusBar 适配状态栏

// 一：barStyle 内容深浅模式(文字颜色)
// dark-content 暗色
// light-content 亮色
// default 透明

// 二：backgroundColor 背景颜色

// 三：animated 动画切换

// 四：transucent 透明悬浮(页面元素会透过状态栏显示)

// 五：hidden 隐藏状态栏

// 六：api
// setBackgroundColor 设置背景颜色
// setBarStyle(barStyle, animated) // 设置内容深浅模式(文字颜色)
// setTranslucent(translucent, animated) // 设置透明悬浮
// setHidden(hidden, animation) // 隐藏状态栏

const StatusBarDemo = () => {
  const statusBarRef = useRef(null);
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
    <View style={[styles.root, { paddingTop: StatusBar.currentHeight }]}>
      <StatusBar
        ref={statusBarRef}
        barStyle="dark-content"
        backgroundColor="transparent"
        animated={true}
        transucent={true}
        hidden={false}
      />
      <SectionList
        style={styles.sectionList}
        sections={SectionData}
        renderItem={renderItem}
        ListFooterComponent={ListFooter}
        ListHeaderComponent={ListHeader}
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
      />
    </View>
  );
};

export default StatusBarDemo;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },

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
