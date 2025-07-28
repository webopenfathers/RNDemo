import React, { useEffect, useRef } from 'react';

import { Image, View, StyleSheet } from 'react-native';

// 一：图片源的两种类型：source
// 1.本地图片 source={avatar}
// 2.网络图片 source={{uri: imageUri}}

// 二：图片的缩放模式 resizeMode
// 1.cover：图片会缩放以填充整个容器，可能会裁剪部分
// 2.contain：图片会缩放以填充整个容器，可能会留有空白
// 3.stretch：图片会拉伸以填充整个容器
// 4.repeat：图片会重复以填充整个容器
// 5.center：图片会缩放填充整个容器，可能会留有空白

// 三：图片模糊
// blurRadius

// 四：占位图片
// defaultSource

// 五：渐入动画时间(单位：ms)
// fadeDuration

// 六：加载成功和加载失败
// onLoad
// onError

// 七：加载开始与加载结束
// onLoadStart
// onLoadEnd

// 八：图片着色
// tintColor: 'red',

// 九：api
// Image.getSize(url, (width, height) => {})
// Image.prefetch(url) 图片预加载

// -------------------------------------------------------------
// 本地图片
import avatar from '../assets/images/avatar.png';
// 网络图片
import { imageUri } from '../constants/Uri';

import icon_setting from '../assets/images/icon_setting.png';

const ImageDemo = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    // Image.getSize(
    //   imageUri,
    //   (width, height) => {
    //     console.log('成功回调', width, height);
    //   },
    //   error => {
    //     console.log('失败回调', error);
    //   },
    // );

    // 预加载图片
    Image.prefetch(imageUri)
      .then(data => {
        console.log('成功回调', data);
      })
      .catch(error => {
        console.log('失败回调', error);
      });
  }, []);

  return (
    <View style={styles.root}>
      {/* 本地图片 */}
      {/* <Image style={styles.img} source={avatar} /> */}
      {/* 网络图片 */}
      <Image
        ref={imgRef}
        style={styles.img}
        defaultSource={avatar}
        source={icon_setting}
      />
    </View>
  );
};

export default ImageDemo;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
  img: {
    width: 240,
    height: 240,
    tintColor: 'blue',
  },
});
