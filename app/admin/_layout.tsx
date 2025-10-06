// app/(admin)/_layout.js
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

export default function AdminTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4ECDC4",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="DashboardScreen"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused, size }) =>
            <Icon name={focused ? "grid" : "grid-outline"} size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="UsersScreen"
        options={{
          title: "Users",
          tabBarIcon: ({ color, focused, size }) =>
            <Icon name={focused ? "people" : "people-outline"} size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ListBlogsScreen"
        options={{
          title: "",
          tabBarIcon: ({ color, focused, size }) =>
            <Icon name={focused ? "document-text" : "document-text-outline"} size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="NotificationScreen"
        options={{
          title: "Posts",
          tabBarIcon: ({ color, focused, size }) =>
            <Icon name={focused ? "document-text" : "document-text-outline"} size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="AdminSettingsScreen"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused, size }) =>
            <Icon name={focused ? "settings" : "settings-outline"} size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
