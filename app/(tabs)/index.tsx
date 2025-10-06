import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import CreateScreen from "./CreateScreen";
import HomeScreen from "./HomeScreen";
import MessageScreen from "./MessageScreen";
import NotificationScreen from "./NotificationScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home": iconName = focused ? "home" : "home-outline"; break;
            case "Message": iconName = focused ? "chatbubble" : "chatbubble-outline"; break;
            case "Create": iconName = focused ? "add-circle" : "add-circle-outline"; break;
            case "Notification": iconName = focused ? "notifications" : "notifications-outline"; break;
            case "Settings": iconName = focused ? "settings" : "settings-outline"; break;
            default: iconName = "help-circle-outline";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF6B6B",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
