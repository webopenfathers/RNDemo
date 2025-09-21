import { Image, View, StyleSheet } from "react-native"
import top from '../assets/top.png'

const GoTop = () => {
  return <View style={styles.iconContent}>
    <Image source={top} style={{ width: '100%', height: '100%', tintColor: "#000" }} />
  </View>
}

export default GoTop


const styles = StyleSheet.create({
  iconContent: {
    position: "absolute",
    right: 16,
    bottom: 80,
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 6,
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 6px'
  }
})