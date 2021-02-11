import React, { useState } from "react";
import Logo from "./logo-chat.png";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    //
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: `${Logo}`,
        }}
        style={{ width: 350, height: 200, marginTop: 10 }}
      />
      <View style={styles.inputContainer}>
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          autoFocus
          type="email"
        />
        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
          type="password"
        />
        <Button onPress={signIn} containerStyle={styles.button} title="Login" />
        <Button
          containerStyle={styles.button}
          type="outline"
          title="Register"
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {},
  button: {},
});
