import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Signup from "./screens/signup";
<<<<<<< HEAD
import { createSwitchNavigator, createAppContainer } from "react-navigation";
=======
>>>>>>> parent of ddb4ce4 (delete)
import LoadingScreen from "./screens/LoadingScreen";
import Login from "./screens/login";
import Dashboard from "./screens/dashboard";
import Home from "./screens/home";
import Splash from "./screens/splash";
import Search from "./screens/search";
<<<<<<< HEAD

export default function App() {
  return <Home />;
}

const AppSwitchNavigator = createSwitchNavigator({
  Home: Home,
  Login: Login,
  Dashboard: Dashboard,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);
=======
import SwitchNavigator from './navigation/SwitchNavigator'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

//import * as blazeface from '@tensorflow-models/blazeface';


const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)



export default function App() {
  return (
    <Provider store={store}>
      <SwitchNavigator/>
    </Provider>
    
  );
}


>>>>>>> parent of ddb4ce4 (delete)
