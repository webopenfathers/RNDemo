import { ScrollView, View, StatusBar, StyleSheet, Animated, Dimensions, Pressable } from "react-native"
import Header from "./components/header"
import FixedContent from "./components/fixedContent"
import ProductImage from './components/productImage'
import MajorParam from './components/majorParam'
import DetailParam from "./components/detailParam"
import GoTop from "./components/goTop"
import { useRef, useState } from "react"
import { getStyle } from './utils'

const commonStyle = getStyle()

const windowHeight = Dimensions.get('window').height;
const ComparisonModel = () => {
  const [showButton, setShowButton] = useState(false);
  const scrollHorizonRef = useRef<ScrollView>(null)
  const scrollVerticalRef = useRef<ScrollView>(null)
  // 阻止 执行淡出动画 只执行一次
  const isFlag = useRef(false)
  const scrollModalRef = useRef<ScrollView>(null)
  const fadeAnim = useRef(new Animated.Value(0)).current; // 用于淡入淡出动画
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


  // 滚动监听-----执行回到顶部逻辑
  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    // 滚动超过屏幕高度的 60% 时出现
    const scrollThreshold = windowHeight * 0.6;
    if (offsetY > scrollThreshold && !showButton) {
      isFlag.current = true
      setShowButton(true);
      // 执行淡入动画
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else if (offsetY <= scrollThreshold && showButton) {
      // 执行淡出动画，动画结束后隐藏按钮
      if (isFlag.current) {
        isFlag.current = false
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setShowButton(false));
      } else {
        isFlag.current = false
      }
    }
  }


  // 点击回到顶部逻辑
  const scrollToTop = () => {
    if (scrollVerticalRef.current) {
      scrollVerticalRef.current.scrollTo({ y: 0, animated: true });
      // 等待动画结束后再隐藏
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start(() => setShowButton(false));
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
      ref={scrollVerticalRef}
      onScroll={handleScroll}
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
    {/* 按钮 淡入淡出动画 和 平移动画 */}
    <Animated.View
      style={[
        {
          display: showButton ? 'flex' : 'none',
          opacity: fadeAnim,
          transform: [
            {
              // interpolate() 是一个映射函数，它将一个输入范围（input）的值，线性地映射到另一个输出范围（output）的值。
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [30, 0], // 从下方滑入
              }),
            },
          ],
        },
      ]}>
      <Pressable onPress={scrollToTop}>
        <GoTop />
      </Pressable>
    </Animated.View>
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