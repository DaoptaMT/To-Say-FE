import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function GetStartedScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/OnboardingScreen");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("./Image/logo.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF0F0",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
