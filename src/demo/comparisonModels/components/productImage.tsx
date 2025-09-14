import { View, StyleSheet, Image } from 'react-native'
import jx1 from '../assets/jx1.png'
import jx2 from '../assets/jx2.png'
import jx3 from '../assets/jx3.png'
import jx4 from '../assets/jx4.png'
import jx5 from '../assets/jx5.png'


const imgList = [jx1, jx2, jx3, jx4, jx5, jx1]

// 商品主图
const ProductImage = (props: any) => {
  return <View style={styles.root} onLayout={(event) => {
    props.handleSetInitBoxPos(event.nativeEvent.layout)
  }}>
    <View style={{ flexDirection: "row", paddingLeft: 20 }}>
      {
        imgList.map((item, index) => (
          <View key={index} style={styles.imgContent}>
            <Image style={styles.imgStyle} source={item} />
          </View>
        ))
      }
    </View>
  </View>
}

export default ProductImage

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    flex: 1,
  },
  imgContent: {
    width: 155,
    height: 155,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: "center",
  },

  imgStyle: {
    width: 140,
    height: 140
  }
})