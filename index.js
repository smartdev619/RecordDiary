/** @format */
import { Navigation } from "react-native-navigation"
import configureStore from './src/store/configureStore';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import Add from './src/screens/Add';

const store = configureStore()
Navigation.registerComponentWithRedux(`navigation.playground.AddScreen`, () => Add, Provider,store);
Navigation.registerComponentWithRedux(`navigation.playground.HomeScreen`, () => Home, Provider,store);

Navigation.setDefaultOptions({
  topBar: {
    title: {
      color: '#fff',
    },
    background: {
      color: '#4286f4',
    }
  }
});


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "navigation.playground.HomeScreen"
            }
          }
        ]
      }
    }
  });
});
