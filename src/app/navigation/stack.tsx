//NAVIGATION
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterTopTabs from './counter-top-tabs';
//SCREENS
import { NewCounterScreen } from '../../screens';
//TYPES
import { StackProps, NavigationStackParams, StackParams } from './model/stack.model';

const Stack = ({ BottomTabsNavigation }: StackProps): JSX.Element => {
	const Stack = createNativeStackNavigator<NavigationStackParams>();

	return (
		<Stack.Navigator initialRouteName={StackParams.BottomTabs} screenOptions={{}}>
			<Stack.Screen
				name={StackParams.BottomTabs}
				component={BottomTabsNavigation}
				options={{
					title: 'Home',
					headerShown: false
				}}
			/>
			<Stack.Screen
				name={StackParams.NewCounterScreen}
				component={CounterTopTabs}
				options={{ title: 'New counter' }}
			/>
		</Stack.Navigator>
	);
};

export default Stack;
