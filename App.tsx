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
import ImageBackgroundDemo from './src/components/ImageBackgroundDemo';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        {/* <ViewDemo /> */}
        {/* <TextDemo /> */}
        {/* <ImageDemo /> */}
        <ImageBackgroundDemo />
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
