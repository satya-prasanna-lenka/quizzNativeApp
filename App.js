import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import Results from "./components/Results";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Questions from "./components/Questions";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen
          options={{
            gestureEnabled: false,
            headerShown: true,
            headerLeft: () => <></>,
          }}
          name="Results"
          component={Results}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
