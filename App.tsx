// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { RootStackParamList } from "./types";

// // Import screens
// import GetStartedScreen from "./app/index";
// import LoginScreen from "./app/LoginScreen";
// import OnboardingScreen from "./app/OnboardingScreen";
// import RegisterScreen from "./app/RegisterScreen";
// import { router } from "expo-router";

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = 'home';
//           } else if (route.name === 'Blog') {
//             iconName = 'article';
//           } else if (route.name === 'Message') {
//             iconName = 'message';
//           } else if (route.name === 'Create') {
//             iconName = 'add-circle';
//           } else if (route.name === 'Settings') {
//             iconName = 'settings';
//           }
//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#FF6B6B',
//         tabBarInactiveTintColor: 'gray',
//         headerShown: false,
//       })}>
//       <Stack.Navigator
//         initialRouteName="GetStarted"
//         screenOptions={{ headerShown: false }}
//       >
//         <Stack.Screen name="GetStarted" component={GetStartedScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Register" component={RegisterScreen} />
//         <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
