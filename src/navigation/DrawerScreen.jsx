import { createDrawerNavigator } from '@react-navigation/drawer';
import TabScreen from './TabScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import UserScreen from '../screens/UserScreen';

const Drawer = createDrawerNavigator();
export default function DrawerScreen() {
    return (
        <Drawer.Navigator initialRouteName="TabsScreen" >
            <Drawer.Screen name="TabsScreen" component={TabScreen} options={{
                drawerLabel: "Home",
                headerTitle: "",
            }} />
            <Drawer.Screen name="UserScreen" component={UserScreen} />
        </Drawer.Navigator>
    )
}