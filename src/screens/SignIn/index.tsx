import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container}>
      <Text>Hello world!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
