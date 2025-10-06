import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

export default function BottomTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF6B6B",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: "",
          tabBarIcon: ({ color, focused, size }) =>
            <Icon name={focused ? "home" : "home-outline"} size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="MessageScreen"
        options={{
          title: "",
          tabBarIcon: ({ color, focused, size }) =>
            <Icon name={focused ? "chatbubble" : "chatbubble-outline"} size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="CreateScreen"
        options={{
          title: "",
          tabBarIcon: ({ color, focused, size }) =>
            <Icon name={focused ? "add-circle" : "add-circle-outline"} size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="NotificationScreen"
        options={{
          title: "",
          tabBarIcon: ({ color, focused, size }) =>
            <Icon name={focused ? "notifications" : "notifications-outline"} size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="SettingsScreen"
        options={{
          title: "",
          tabBarIcon: ({ color, focused, size }) =>
            <Icon name={focused ? "settings" : "settings-outline"} size={size} color={color} />
        }}
      />
    </Tabs>
  );
}
