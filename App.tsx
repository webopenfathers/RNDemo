/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  SafeAreaView,
} from 'react-native';

// 一：RN 基础组件
// import ViewDemo from './src/components/ViewDemo';
// import TextDemo from './src/components/TextDemo';
// import ImageDemo from './src/components/ImageDemo';
// import ImageBackgroundDemo from './src/components/ImageBackgroundDemo';
// import TextInputDemo from './src/components/TextInputDemo';
// import TouchableOpacityDemo from './src/components/TouchableOpacityDemo';
// import TouchableHighlightDemo from './src/components/TouchableHighlightDemo';
// import TouchableWithoutFeedbackDemo from './src/components/TouchableWithoutFeedbackDemo';
// import ButtonDemo from './src/components/ButtonDemo';
// import PressableDemo from './src/components/PressableDemo';
// import ScrollViewDemo from './src/components/ScrollViewDemo';
// import FlatListDemo from './src/components/FlatListDemo';
// import SectionListDemo from './src/components/SectionListDemo';
// import ModalDemo from './src/components/ModalDemo';
// import StatusBarDemo from './src/components/StatusBarDemo';
// import SwitchDemo from './src/components/SwitchDemo';
// import PersonalInfo from './src/components/PersonalInfo';


// 二：RN 常用API组件
// import AlertAndConsole from './src/components/API/AlertAndConsole';
// import DimensionAnduseWindowDimension from './src/components/API/DimensionAnduseWindowDimension';
// import PlatformAPI from './src/components/API/Platform';
// import StyleSheetAPI from './src/components/API/StyleSheet'
// import LinkingAPI from './src/components/API/Linking';
// import PixelRationAPI from './src/components/API/PixelRatio';
// import BackHandlerAPI from './src/components/API/BackHandler';
// import PermissionsAndroidAPI from './src/components/API/PermissionsAndroid'
// import VibrationAPI from './src/components/API/Vibration'
// import ToastAndroidAPI from './src/components/API/ToastAndroid'
// import TransformAPI from './src/components/API/Transform'
// import KeyboardAPI from './src/components/API/Keyboard'

// 三：RN 基础动画
// import Anim1 from './src/components/Animated/Anim1'
// import Anim2 from './src/components/Animated/Anim2'
// import Anim3 from './src/components/Animated/Anim3'
// import AnimatedDecay from './src/components/Animated/AnimatedDecay4'
// import AnimatedSpring from './src/components/Animated/AnimatedSpring5'
// import AnimatedTiming from './src/components/Animated/AnimatedTiming6'
// import AnimatedValueXY from './src/components/Animated/AnimatedValueXY7'
// import Anim8 from './src/components/Animated/Anim8'
// import FollowScroll from './src/components/Animated/FollowScroll'
// import Anim9 from './src/components/Animated/Anim9'
// import LayoutAnimation10 from './src/components/Animated/LayoutAnimation10'
// import AnimShow from './src/components/Animated/AnimShow'

// 四：React 中的Context上下文
// import RootView from './src/context/RootView'

// 五：React 中的HOC高阶组件
// import InfoView from './src/hoc/InfoView'

// 六：函数组件中的memo 和 类组件中的shouldComponentUpdate 性能优化(避免重复渲染)
import MemoPage from './src/memo/MemoPage'

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        {/* <ViewDemo /> */}
        {/* <TextDemo /> */}
        {/* <ImageDemo /> */}
        {/* <ImageBackgroundDemo /> */}
        {/* <TextInputDemo /> */}
        {/* <TouchableOpacityDemo /> */}
        {/* <TouchableHighlightDemo /> */}
        {/* <TouchableWithoutFeedbackDemo /> */}
        {/* <ButtonDemo /> */}
        {/* <PressableDemo /> */}
        {/* <ScrollViewDemo /> */}
        {/* <FlatListDemo /> */}
        {/* <SectionListDemo /> */}
        {/* <ModalDemo /> */}
        {/* <StatusBarDemo /> */}
        {/* <SwitchDemo /> */}
        {/* <PersonalInfo /> */}
        {/* <AlertAndConsole /> */}
        {/* <DimensionAnduseWindowDimension /> */}
        {/* <PlatformAPI /> */}
        {/* <StyleSheetAPI /> */}
        {/* <LinkingAPI /> */}
        {/* <PixelRationAPI /> */}
        {/* <BackHandlerAPI /> */}
        {/* <PermissionsAndroidAPI /> */}
        {/* <VibrationAPI /> */}
        {/* <ToastAndroidAPI /> */}
        {/* <TransformAPI /> */}
        {/* <KeyboardAPI /> */}
        {/* <Anim1 /> */}
        {/* <Anim2 /> */}
        {/* <Anim3 /> */}
        {/* <AnimatedDecay /> */}
        {/* <AnimatedSpring /> */}
        {/* <AnimatedTiming /> */}
        {/* <AnimatedValueXY /> */}
        {/* <Anim8 /> */}
        {/* <FollowScroll /> */}
        {/* <Anim9 /> */}
        {/* <LayoutAnimation10 /> */}
        {/* <AnimShow /> */}
        {/* <RootView /> */}
        {/* <InfoView name="Alice" age={28} /> */}
        <MemoPage />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});

export default App;
