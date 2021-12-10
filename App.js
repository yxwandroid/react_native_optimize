/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  useColorScheme,
  Button,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MemoButton} from './MemoButton';

const errorHandler = err => {
  console.log('------------------------------');
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
  console.log('------------------------------');
};

ErrorUtils.setGlobalHandler(errorHandler);

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const causeAppCrashViaCustomError = () => {
    throw new Error('custom error');
  };

  const causeAppCrashViaMissingFunction = () => {
    this.abraCadabra();
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            paddingTop: 100,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <MemoButton color={'red'} />
          <Image source={require('./images/ic_launcher.png')} />
          <Button
            title="Cause Crash Via Custom Error"
            color="#000"
            onPress={causeAppCrashViaCustomError}
          />
          <Button
            title="Cause Crash Via Missing Function"
            color="#000"
            onPress={causeAppCrashViaMissingFunction}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
