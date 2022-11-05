/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  StatusBar,
  Text,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        animated={true}
        backgroundColor="rgba(137, 130, 244, 1)" />
      <View style={styles.background}>
        <AnimatedLinearGradient 
        start={{x: 0, y: 0}} end={{x: 1, y: 1}}
        colors={['rgba(115,204,255,1)','rgba(127, 9, 206, 0.66)']}
        style={styles.gradientBackground}
        >
          <View style={styles.container}>
            <LoginForm/>
          </View>
        </AnimatedLinearGradient>
      </View>
    </SafeAreaView>
  );
};

const LoginForm = () => {
  return(
    <View 
    style={styles.loginView}
    >
      <Text
      style={styles.title}
      >
        LOGIN
      </Text>
      <View>
        <TextInput
          placeholder='Email'

          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          autoComplete='password'
          secureTextEntry
          autoCorrect={false}
          style={styles.input}
        />
      </View>
      <View>
        {/* <Button 
          onPress={()=>{}}
          title="MASUK"
          color={"rgba(137, 130, 244, 1)"}
        /> */}
        <View
        
        style={{
          backgroundColor: "rgba(137, 130, 244, 1)"
        }}>

        </View>
      </View>
      <View>
        <Text onPress={()=>{}}>
          Belum punya akun?
        </Text>
        <Text>
          Lupa password?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: "white",
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradientBackground:{
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  container:{
    backgroundColor: "white",
    height: "60%",
    width: "80%",
    margin: 5,
    padding:5,
    borderRadius: 20,
  },
  title:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
  },
  loginView:{

    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  input:{
    borderColor:'black', 
    textDecorationColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 5
  },
});

export default App;
