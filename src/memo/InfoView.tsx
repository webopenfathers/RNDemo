import { memo } from 'react';
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';

type Props = {
  info: UserInfo
};

const InfoView = memo((props: Props) => {
  const { info } = props;
  const styles = darkStyles;

  console.log('Function component render...');

  return (
    <View style={styles.content}>
      <Image source={{ uri: info.avatar }} style={styles.img} />
      <Text style={styles.txt}>{info.name}</Text>
      <View style={styles.infoLayout}>
        <Text style={styles.infoTxt}>{info.desc}</Text>
      </View>
    </View>
  );
}, (preProps: Props, nextProps: Props) => {
  // 返回 true 表示不需要更新，false 则表示需要更新
  return JSON.stringify(preProps.info) === JSON.stringify(nextProps.info);
});

export default InfoView;

const darkStyles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#353535',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 64,
    marginTop: StatusBar.currentHeight,
  },
  img: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#ffffffE0',
  },
  txt: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 32,
  },
  infoLayout: {
    width: '90%',
    padding: 16,
    backgroundColor: '#808080',
    borderRadius: 12,
    marginTop: 24,
  },
  infoTxt: {
    fontSize: 16,
    color: 'white',
  },
});
