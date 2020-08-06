import App from './App';
import {AppRegistry} from 'react-native';
import Share from './Share';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('MyShareEx', () => Share);
