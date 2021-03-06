import React, { useState, useEffect } from "react";
import Logo from "./logo-chat.png";
import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // check if login or register redirect to home component
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password).catch((err) => alert(err));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
          onSubmitEditing={signIn}
          placeholder="Password"
          secureTextEntry
          type="password"
        />
      </View>
      <Button onPress={signIn} containerStyle={styles.button} title="Login" />
      <Button
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
        type="outline"
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: { width: 300 },
  button: { width: 200, marginTop: 10 },
});
