import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tabs.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#7045f8',
      },
    }}>
      <Tabs.Screen name='Home' component={HomeScreen} options={{
        tabBarStyle: {
          backgroundColor: '#f8f8fc'
        },
        tabBarIcon: ({ color, focused, size }) => (
          <Ionicons name={ focused ? 'home' : 'home-outline' } size={size} color={color} />
        )
      }} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})