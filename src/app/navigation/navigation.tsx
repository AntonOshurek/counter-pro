//NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//SCREENS
import { HomeScreen, NewCounterScreen } from '../../screens';
//TYPES
import { NavigationStackParams, StackParams } from './model/navigation.model';

const Navigation = () => {
	const Stack = createNativeStackNavigator<NavigationStackParams>();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={StackParams.HomeScreen}>
				<Stack.Screen
					name={StackParams.HomeScreen}
					component={HomeScreen}
					options={{ title: 'Home' }}
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
