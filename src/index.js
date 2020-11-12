import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux';
import Home from './scenes/home';
import Details from './scenes/details';

const { Navigator, Screen } = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#CC0D0D" barStyle="light-content" />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="Home"  component={Home} />
          <Screen name="Details" component={Details} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
