import { View, StyleSheet, Image } from 'react-native'
import jx1 from '../assets/jx1.png'
import jx2 from '../assets/jx2.png'
import jx3 from '../assets/jx3.png'
import jx4 from '../assets/jx4.png'
import jx5 from '../assets/jx5.png'
import { getStyle } from '../utils'

const commonStyle = getStyle()


const imgList = [jx4, jx2, jx3, jx1, jx5, jx1]

// 商品主图
const ProductImage = (props: any) => {
  return <View style={styles.root} onLayout={(event) => {
    props.handleSetInitBoxPos(event.nativeEvent.layout)
  }}>
    <View style={{ flexDirection: "row" }}>
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
    width: commonStyle.productImage.width,
    height: commonStyle.productImage.width,
    marginRight: commonStyle.Space,
    justifyContent: 'center',
    alignItems: "center",
  },

  imgStyle: {
    width: commonStyle.productImage.imageWidth,
    height: commonStyle.productImage.imageWidth
  }
})