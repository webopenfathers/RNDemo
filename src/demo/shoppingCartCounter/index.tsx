import { useEffect, useRef, useState } from "react";
import { Text, TextInput, View, Keyboard, Animated } from "react-native"

const Counter = () => {
  const [isLongPress, setIsLongPress] = useState(false);
  const timeout = useRef<any>(null);
  const [a, setA] = useState(0);
  const viewHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e: any) => {
      console.log(e.endCoordinates.height, '键盘显示了');
      Animated.timing(viewHeight, {
        toValue: e.endCoordinates.height,
        duration: 300,
        useNativeDriver: false
      }).start();
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      console.log('键盘隐藏了');
      Animated.timing(viewHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start();
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    }
  }, [])


  // 插值动画的使用
  const bgc = viewHeight.interpolate({
    inputRange: [0, 300],
    outputRange: ['#FF5733', '#33FF57']
  })


  const handleFocus = () => {
    console.log("输入框获得焦点");
  }

  const handlePressIn = () => {
    timeout.current = setTimeout(() => {
      setIsLongPress(true);
    }, 500)
  }

  const handlePressOut = () => {
    clearTimeout(timeout.current);
    setIsLongPress(false);
  }

  return <View>
    <TextInput
      onFocus={handleFocus}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={{
        fontSize: 24,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 100,
        textAlign: 'center'
      }}
      value="0"
    />
    {isLongPress && <Text>张博闻</Text>}
    {/* Animated动画和interpolate插值动画 */}
    <Animated.View style={{ height: viewHeight, backgroundColor: bgc }} />
  </View>
}

export default Counter