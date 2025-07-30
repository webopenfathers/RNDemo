import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';
import icon_close_modal from '../assets/images/icon_close_modal.png';
import { SectionData } from '../constants/Data';

// Modal 自定义弹窗
// 一：控制显示
// visible：控制弹窗的显示与隐藏
// 二：渲染内容
// children：弹窗内容

// 三：安卓返回关闭
// onRequestClose={() => setVisible(false)}

// 四：iOS通过自己写关闭Modal事件点击x号关闭

// 五：背景透明
// transparent={true}

// 六：状态栏透明
// statusBarTranslucent={true}

// 七：动画方式
// animationType
// none 无动画
// slide 从下向上滑动
// fade 渐变

// 八：状态回调
// onShow 弹窗打开时调用
// onDismiss 弹窗关闭时调用

// 九：背景动画
// 伏笔

const ModalDemo = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const renderItem = ({ item, index, section }) => {
    return <Text style={styles.txt}>{item}</Text>;
  };

  const ListHeader = (
    <View style={styles.header}>
      <Text style={styles.extraTxt}>列表头部</Text>
      <TouchableOpacity style={styles.closeButton} onPress={hideModal}>
        <Image style={styles.closeImage} source={icon_close_modal} />
      </TouchableOpacity>
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
    <View style={styles.root}>
      <Button title="打开模态框" onPress={showModal} />
      <Modal
        visible={visible}
        onRequestClose={hideModal}
        transparent={true}
        statusBarTranslucent={true}
        animationType="slide"
        onShow={() => console.log('modal show')}
        onDismiss={() => console.log('modal dismiss')}
      >
        {/* 设置modal的高度样式可以通过View进行占位 */}
        <View style={styles.blank} />
        <View style={styles.content}>
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
            ItemSeparatorComponent={separatorComponent}
            stickySectionHeadersEnabled={true}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalDemo;

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    padding: 30,
  },

  blank: {
    width: '100%',
    height: '10%',
    backgroundColor: '#00000050',
  },

  content: {
    height: '90%',
    width: '100%',
    backgroundColor: '#ff000030',
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

  closeButton: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 16,
  },

  closeImage: {
    width: 24,
    height: 24,
  },
});
