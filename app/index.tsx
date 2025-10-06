// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { router } from 'expo-router';
// import { useEffect } from 'react';
// import { Image, StyleSheet, View } from 'react-native';

// export function GetStartedScreen() {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.replace("/OnboardingScreen"); 
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={getStartedStyles.container}>
//       <Image source={require("./Image/logo.png")} style={getStartedStyles.logo} />
//     </View>
//   );
// }

// const getStartedStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FFF0F0",
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     resizeMode: "contain",
//   },
// });

// const Tab = createBottomTabNavigator();

import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function GetStartedScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/OnboardingScreen"); 
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("./Image/logo.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFF0F0" },
  logo: { width: 150, height: 150, resizeMode: "contain" },
});
