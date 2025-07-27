/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  Text,
  StyleSheet,
  useColorScheme,
  View,
  SafeAreaView,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello ZBW</Text>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NewAppScreen templateFileName="App.tsx" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
