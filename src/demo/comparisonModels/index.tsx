import { ScrollView, View, Text, StatusBar, StyleSheet, Animated } from "react-native"
import Header from "./components/header"
import FixedContent from "./components/fixedContent"
import ProductImage from './components/productImage'
import MajorParam from './components/majorParam'
import DetailParam from "./components/detailParam"
import { useRef, useState } from "react"
import { getStyle } from './utils'

const commonStyle = getStyle()


const ComparisonModel = () => {
  const scrollHorizonRef = useRef<ScrollView>(null)
  const scrollModalRef = useRef<ScrollView>(null)
  // 大盒子top定位
  const [initBoxPos, setInitBoxPos] = useState(0)
  // 详细参数定位
  const [detailParamPos, setDetailParam] = useState(0)

  // 系类数据
  const [detailList, setDetailList] = useState([])
  const currentType = useRef<string>('')

  const handleSetInitBoxPos = ({ height }: any) => {
    setInitBoxPos(height)
  }

  const handleSetDetailParam = ({ height }: any) => {
    setDetailParam(height)
  }

  const handleSetDetailList = (detailArr: any) => {
    setDetailList(detailArr)
  }

  // 跟随滚动
  const webGennSui = (event: any, type: string) => {
    const { x, y } = event.nativeEvent.contentOffset
    if (currentType.current === 'modal') {
      scrollHorizonRef?.current?.scrollTo({ x, y, animated: false })
    } else {
      scrollModalRef?.current?.scrollTo({ x, y, animated: false })
    }
  }


  return <View style={styles.root}>
    {/* 顶部横向滚动的机型对比页面 */}
    <View>
      <Animated.ScrollView
        ref={scrollModalRef}
        bounces={false}
        horizontal
        contentContainerStyle={{ paddingLeft: commonStyle.Space }}
        showsHorizontalScrollIndicator={false}
        onTouchStart={() => currentType.current = 'modal'}
        onScroll={(event) => currentType.current === 'modal' && webGennSui(event, 'modal')}
      >
        {/* 头部横向滚动机型名称 */}
        <Header />
      </Animated.ScrollView>
    </View>
    {/* 竖直滚动区域 */}
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}>
      {/* 跟随水平滚动区域 */}
      <Animated.ScrollView
        ref={scrollHorizonRef}
        contentContainerStyle={{ paddingLeft: commonStyle.Space }}
        onTouchStart={() => currentType.current = 'content'}
        onScroll={(event) => currentType.current === 'content' && webGennSui(event, 'content')}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          paddingBottom: 100,
        }}>
        <View>
          {/* 商品主图 */}
          <ProductImage handleSetInitBoxPos={handleSetInitBoxPos} />
          {/* 核心参数 */}
          <MajorParam handleSetDetailParam={handleSetDetailParam} />
          {/* 详细参数 */}
          <DetailParam handleSetDetailList={handleSetDetailList} />
          {/* 商品主图 */}
          <ProductImage handleSetInitBoxPos={handleSetInitBoxPos} />
        </View>
      </Animated.ScrollView>
      {/* 不跟随水平滚动,但跟随垂直滚动 */}
      <FixedContent initBoxPos={initBoxPos} detailParamPos={detailParamPos} detailList={detailList} />
    </Animated.ScrollView>
  </View>
}


const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    flexDirection: 'column', // 必须指定
    marginTop: StatusBar.currentHeight
  }
})

export default ComparisonModel