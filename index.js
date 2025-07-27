/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { name, version } from './package.json';
console.log(`name=${name},version=${version}`);

AppRegistry.registerComponent(appName, () => App);
