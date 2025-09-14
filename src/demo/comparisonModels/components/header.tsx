import { View, Text, StyleSheet } from 'react-native';

const mobileList = [
  {
    name: 'Pura 80 Pro'
  },
  {
    name: 'Pura 80 Ultra'
  },
  {
    name: 'Mate 70 RS 非凡大师'
  },
  {
    name: 'Mate X5'
  },
  {
    name: '华为畅享 70X'
  },
  {
    name: 'Mate 70 RS 非凡大师'
  }
]

const Header = () => {
  return <View style={styles.content}>
    {
      mobileList.map((item, index) => (
        <View key={index} style={styles.itemContent}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.itemTxt}>{item.name}</Text>
        </View>
      ))
    }
  </View>
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
  },
  itemContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 8,
    width: 155,
    paddingHorizontal: 10,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  itemTxt: {
    fontSize: 12
  }
})

export default Header