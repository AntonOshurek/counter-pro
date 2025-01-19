//NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//SCREENS
import { HomeScreen, NewCounterScreen, SettingsScreen } from '../../screens';
//TYPES
import { NavigationStackParams, StackParams } from './model/navigation.model';

const DrawerNavigator = () => {
	const Drawer = createDrawerNavigator();

	return (
		<Drawer.Navigator initialRouteName='Home'>
			<Drawer.Screen component={HomeScreen} name='Home' options={{ title: 'Home' }} />
			<Drawer.Screen
				component={SettingsScreen}
				name='Settings'
				options={{ title: 'Settings' }}
			/>
		</Drawer.Navigator>
	);
};

const Navigation = () => {
	const Stack = createNativeStackNavigator<NavigationStackParams>();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={StackParams.Drawer} screenOptions={{}}>
				{/* <Stack.Screen
					name={StackParams.HomeScreen}
					component={HomeScreen}
					options={{ title: 'Home' }}
				/> */}
				<Stack.Screen
					name={StackParams.Drawer}
					component={DrawerNavigator}
					options={{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name={StackParams.NewCounterScreen}
					component={NewCounterScreen}
					options={{ title: 'new counter' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
