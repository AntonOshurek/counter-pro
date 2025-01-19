//NAVIGATION
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//SCREENS
import { NewCounterScreen } from '../../screens';
//TYPES
import { StackProps, NavigationStackParams, StackParams } from './model/stack.model';

const Stack = ({ DrawerNavigation }: StackProps): JSX.Element => {
	const Stack = createNativeStackNavigator<NavigationStackParams>();

	return (
		<Stack.Navigator initialRouteName={StackParams.Drawer} screenOptions={{}}>
			<Stack.Screen
				name={StackParams.Drawer}
				component={DrawerNavigation}
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
	);
};

export default Stack;
