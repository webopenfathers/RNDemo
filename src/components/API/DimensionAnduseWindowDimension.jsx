import { useEffect } from 'react';

import { View, Dimensions, Button, useWindowDimensions } from 'react-native';

// Dimension 和 useWindowDimension 获取屏幕信息
// 一. 获取屏幕宽高的两种方式
// width 屏幕宽度
// height 屏幕高度

// 二. 获取缩放，文字缩放
// scale 屏幕缩放比例
// fontScale 文字缩放比例

// 三：Dimensions.get传screen和window的区别
// screen 屏幕高度包含状态栏高度。
// window 默认不包含状态栏高度(但状态栏设置为沉浸式的时候包含状态栏高度和screen相同)

// 四：addEventListener监听屏幕信息变化

const DimensionAnduseWindowDimension = () => {
  // addEventListener监听屏幕信息变化
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      (window, screen) => {
        console.log(window, screen);
      },
    );

    return () => subscription.remove();
  }, []);
  // const { width, height, scale, fontScale } = useWindowDimensions();
  const onPress = () => {
    const { width, height, scale, fontScale } = Dimensions.get('window');
    console.log(
      'Dimensions',
      `width=${width},height=${height},scale=${scale},fontScale=${fontScale}`,
    );

    // console.log(
    //   'useWindowDimensions',
    //   `width=${width},height=${height},scale=${scale},fontScale=${fontScale}`,
    // );
  };

  return (
    <View style={{ width: '100%', height: '100%', paddingVertical: 20 }}>
      <Button title="按钮" onPress={onPress} />
    </View>
  );
};

export default DimensionAnduseWindowDimension;
