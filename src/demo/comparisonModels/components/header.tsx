import { View, Text, StyleSheet, Pressable } from 'react-native';
import ModelSelection from './modelSelection';
import { useRef } from 'react';

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
  const modelRef = useRef<typeof ModelSelection | null>(null)

  return <View style={styles.content}>
    {
      mobileList.map((item, index) => (
        // @ts-ignore
        <Pressable key={index} style={styles.itemContent} onPress={() => modelRef?.current?.showModal()}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.itemTxt}>{item.name}</Text>
        </Pressable>
      ))
    }
    <ModelSelection ref={modelRef} />
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