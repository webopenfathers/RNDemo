import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useEffect } from 'react';

import icon_add from '../assets/images/icon_add.png';

// 高阶组件
const widthFloatButton = OriginView => {
  // 1.这里面的props有值是因为App.tsx中引用的InfoView传递的。
  const HOCView = props => {
    console.log(props, '高阶组件中的props');
    useEffect(() => {
      console.log('高阶组件加载完成');
      reportDeviceInfo();
    }, []);

    const reportDeviceInfo = () => {
      // 模拟上报
      // const deviceInfo = {
      //   deviceId: 1,
      //   deviceName: '',
      //   modal: '',
      //   storage: 0,
      //   ip: 0,
      // };
      // reportDeviceInfo(deviceInfo)
    };

    const onPress = () => {
      console.log('onPress...');
    };
    return (
      <>
        <OriginView {...props} />
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
          <Image source={icon_add} style={styles.addImg} />
        </TouchableOpacity>
      </>
    );
  };

  return HOCView;
};

export default widthFloatButton;

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 64,
    right: 20,
  },

  addImg: {
    width: 54,
    height: 54,
    resizeMode: 'contain',
  },
});
