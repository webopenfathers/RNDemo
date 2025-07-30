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

import ModalDemo from './src/components/ModalDemo';

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
        <ModalDemo />
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
