import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from './src/navigation/TabScreen';
import DrawerScreen from './src/navigation/DrawerScreen';
const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Drawer" component={DrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

