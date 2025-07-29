import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';

import bg_card from '../assets/images/bg_card.png';
import icon_bank from '../assets/images/icon_bank.png';

// ImageBackground 是 View 组件和 Image组件的结合
// ImageBackground 组件的属性：
// style：是 ImageBackground 作为布局的样式
// source：是 ImageBackground 内部加载的图片资源
// imageStyle：是 ImageBackground 内部加载图片的样式
// ref: 获取 ImageBackground 组件的引用
// imageRef: 获取 Image 组件的引用

const ImageBackgroundDemo = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        style={styles.viewStyle}
        imageStyle={styles.imgStyle}
        source={bg_card}
      >
        <Image style={styles.icon_logo} source={icon_bank} />
        <Text style={styles.txtBank}>
          {`招商银行\n`}
          <Text style={styles.cardType}>{`储蓄卡\n\n`}</Text>
          <Text style={styles.cardNoTxt}>●●●● ●●●● ●●●● 3068</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroundDemo;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },

  viewStyle: {
    width: '100%',
    height: 150,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flxt-start',
  },

  imgStyle: {
    resizeMode: 'cover',
    borderRadius: 12,
  },

  icon_logo: {
    width: 48,
    height: 48,
    marginLeft: 20,
    marginTop: 20,
  },

  txtBank: {
    fontSize: 24,
    color: '#fff',
    marginLeft: 10,
    marginTop: 21,
    fontWeight: 'bold',
  },
  cardType: {
    fontSize: 20,
    color: '#FFFFFFA0',
    fontWeight: 'normal',
  },
  cardNoTxt: {
    fontSize: 26,
    color: 'white',
  },
});
