import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  StatusBar,
} from 'react-native';
import LoginForm from '../component/LoginForm';
import BlankFullPage from '../component/BlankFullPage';

const LoginPage = () => {
  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);
  return (
    <BlankFullPage>
      <LoginForm />
    </BlankFullPage>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    backgroundColor: 'white',
    height: '60%',
    width: '80%',
    margin: 5,
    padding: 5,
    borderRadius: 20,
  },
});

export default LoginPage;
