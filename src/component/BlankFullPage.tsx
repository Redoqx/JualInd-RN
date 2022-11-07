import React, {type PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  StatusBar,
} from 'react-native';

const BlankFullPage = ({children}: Props) => {
  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor="rgba(137, 130, 244, 1)" />
      <View style={styles.background}>
        <AnimatedLinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['rgba(115,204,255,1)', 'rgba(127, 9, 206, 0.66)']}
          style={styles.gradientBackground}>
          {children}
        </AnimatedLinearGradient>
      </View>
    </SafeAreaView>
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

type Props = PropsWithChildren;

export default BlankFullPage;
