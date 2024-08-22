// src/AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import UserListScreen from './UserListScreen';
import HomeScreen from './HomeScreen';
const AppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Home: HomeScreen,
        UserList: UserListScreen,
    },
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(AppNavigator);
