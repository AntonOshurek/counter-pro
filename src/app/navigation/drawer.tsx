//NAVIGATION
import { createDrawerNavigator } from '@react-navigation/drawer';
//SCREENS
import { HomeScreen, SettingsScreen } from '../../screens';
//TYPES
import { DrawerParams, NavigationDrawerParams } from './model/drawer.model';

const Drawer = (): JSX.Element => {
	const Drawer = createDrawerNavigator<NavigationDrawerParams>();

	return (
		<Drawer.Navigator initialRouteName={DrawerParams.HomeScreen}>
			<Drawer.Screen
				component={HomeScreen}
				name={DrawerParams.HomeScreen}
				options={{ title: 'Home' }}
			/>
			<Drawer.Screen
				component={SettingsScreen}
				name={DrawerParams.SettingsScreen}
				options={{ title: 'Settings' }}
			/>
		</Drawer.Navigator>
	);
};

export default Drawer;
