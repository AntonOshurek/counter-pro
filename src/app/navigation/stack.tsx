//NAVIGATION
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterTopTabs from './counter-top-tabs';
import BottomTabs from './bottom-tabs';
//TYPES
import { NavigationStackParams, StackParams } from './model/stack.model';

const Stack = (): JSX.Element => {
	const Stack = createNativeStackNavigator<NavigationStackParams>();

	return (
		<Stack.Navigator initialRouteName={StackParams.BottomTabs} screenOptions={{}}>
			<Stack.Screen
				name={StackParams.BottomTabs}
				component={BottomTabs}
				options={{
					title: 'Home',
					headerShown: false
				}}
			/>
			<Stack.Screen
				name={StackParams.NewCounterScreen}
				component={CounterTopTabs}
				options={{ title: 'Counter' }}
			/>
		</Stack.Navigator>
	);
};

export default Stack;
