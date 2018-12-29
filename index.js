/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import CombinedChart from './CombineChart';
import StackedbarChart from './StackedbarChart'
import PieCharte from './PieChart'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CombinedChart);
