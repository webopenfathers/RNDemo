import { View, Button, StyleSheet, PixelRatio } from 'react-native';

// 【PixelRatio 像素比例工具】
// 一：获取屏幕像素密度
// PixelRatio.get()  2.625

// 二：获取字体缩放比例(仅安卓)
// PixelRatio.getFontScale() 1

// 三：获取布局大小
// PixelRatio.getPixelSizeForLayoutSize(200) 525 ===> 200 * PixelRatio.get()

// 【PixelRatio 特殊场景下的救命稻草】(像素丢失导致页面异常场景)
// 一：获取就近值
// PixelRatio.roundToNearestPixel(32.1) 32

const PixelRatioAPI = () => {
  const onPress = () => {
    // console.log(PixelRatio.get(), 'PixelRatio.get()');
    // console.log(PixelRatio.getFontScale(), 'PixelRatio.getFontScale()');
    // console.log(
    //   PixelRatio.getPixelSizeForLayoutSize(200),
    //   'PixelRatio.getPixelSizeForLayoutSize()',
    // );
    console.log(
      PixelRatio.roundToNearestPixel(32.1),
      'PixelRatio.roundToNearestPixel(32.1)',
    );
  };
  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
      <View style={styles.view}>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
        <View style={styles.subView}></View>
      </View>
    </View>
  );
};

export default PixelRatioAPI;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingVertical: 20,
  },

  view: {
    width: '100%',
    backgroundColor: 'red',
  },

  subView: {
    width: '100%',
    height: PixelRatio.roundToNearestPixel(32.1),
    backgroundColor: 'green',
  },
});
