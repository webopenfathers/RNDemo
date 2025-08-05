import { useState } from 'react';
import { View, Button } from 'react-native';
import PageView from './PageView';
import { ThemeContext } from './ThemeContext';

const RootView = () => {
  const [theme, setTheme] = useState('dark');

  const onPress = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <View style={{ width: '100%' }}>
        <View style={{ marginTop: 20 }}>
          <Button title="切换主题" onPress={onPress} />
        </View>
        <PageView />
      </View>
    </ThemeContext.Provider>
  );
};

export default RootView;
