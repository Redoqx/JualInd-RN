import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginView}>
        <Text style={styles.title}>LOGIN</Text>
        <View>
          <TextInput
            placeholder="Email"
            placeholderTextColor={'black'}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            autoComplete="password"
            secureTextEntry
            placeholderTextColor={'black'}
            autoCorrect={false}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: 'rgba(137, 130, 244, 1)',
              padding: 10,
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <Text style={styles.buttonText}>MASUK</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text onPress={() => {}} style={styles.bottomText}>
            Belum punya akun?
          </Text>
          <Text onPress={() => {}} style={styles.bottomText}>
            Lupa password?
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '60%',
    width: '80%',
    margin: 5,
    padding: 5,
    borderRadius: 20,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
  },
  loginView: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  input: {
    borderColor: 'black',
    textDecorationColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  bottomText: {
    color: 'black',
    fontSize: 12,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'White',
  },
});

export default LoginForm;
