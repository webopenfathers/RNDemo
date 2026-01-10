import { useRef, useState } from "react"
import { Text, View, StyleSheet, Dimensions, Animated, Pressable } from "react-native"

const styles = StyleSheet.create({
  root: {
    width: Dimensions.get('window').width - 40,
    height: 90,
    marginTop: 100,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  tabContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40
  },
  tabItem: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 5,
    paddingHorizontal: 10,
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
  },
  indicator: {
    position: 'absolute',
    bottom: 44, // 调整到底部
    height: 2, // 下划线高度
    backgroundColor: '#007AFF',
    width: 20,
  }
})

const Demo = () => {
  const tabs = ['商品', '评价', '参数', '详情']
  const [activeIndex, setActiveIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const tabRefs = useRef<any[]>([]);
  const handleLayout = (index: number) => (e: any) => {
    const { x, width } = e.nativeEvent.layout;
    // 计算每个标签的位置和宽度，存储在 refs 中
    tabRefs.current[index] = { x, width };
    // 如果是第一个标签，初始化指示器位置
    if (index === 0 && activeIndex === 0) {
      translateX.setValue(x + (width - 20) / 2);
    }
  }

  const handleTabPress = (index: number) => {
    if (tabRefs.current[index]) {
      setActiveIndex(index);
      const { x, width } = tabRefs.current[index];
      const targetPosition = x + (width - 20) / 2;
      // 使用 Animated API 创建平滑过渡动画
      Animated.timing(translateX, {
        toValue: targetPosition,
        duration: 300,
        useNativeDriver: true,
      }).start();

    }
  }

  return <View style={styles.root}>
    {/* tabs */}
    <View style={styles.tabContent}>
      {
        tabs.map((tab, index) => (
          <Pressable
            key={index}
            onLayout={handleLayout(index)}
            onPress={() => handleTabPress(index)}
            style={{ flex: 1, alignItems: 'center' }}
          >
            <Text style={[styles.tabItem, activeIndex === index && { color: '#007AFF' }]}>
              {tab}
            </Text>
          </Pressable>
        ))
      }
    </View>
    {/* 滑动指示器 */}
    <Animated.View
      style={[
        styles.indicator,
        { transform: [{ translateX }] }
      ]}
    />
  </View>
}

export default Demo