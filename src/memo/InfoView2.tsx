import React from 'react';
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';

type Props = {
  info: UserInfo
};

export default class InfoView2 extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return JSON.stringify(nextProps.info) !== JSON.stringify(this.props.info);
  }

  render(): React.ReactNode {
    const { info } = this.props;
    console.log('Class component render...');
    const styles = darkStyles;
    return (
      <View style={styles.content}>
        <Image source={{ uri: info.avatar }} style={styles.img} />
        <Text style={styles.txt}>{info.name}</Text>
        <View style={styles.infoLayout}>
          <Text style={styles.infoTxt}>{info.desc}</Text>
        </View>
      </View>
    );
  }

}



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
