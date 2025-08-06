import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import icon_add from '../assets/images/icon_add.png';

// 高阶组件
const widthFloatButton = OriginView => {
  const HOCView = props => {
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
