//NAVIGATION
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterTopTabs from './counter-top-tabs';
import BottomTabs from './bottom-tabs';
import GroupTopTabs from './group-top-tabs';
//TYPES
import { NavigationStackParams, StackParams } from './model/stack.model';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
//STYLES
import { colors } from '../../shaared/styles';

const Stack = (): JSX.Element => {
	const Stack = createNativeStackNavigator<NavigationStackParams>();
  const theme = UseThemeResolver();

	return (
		<Stack.Navigator initialRouteName={StackParams.BottomTabs} screenOptions={{
      headerStyle: {
        backgroundColor: colors[theme].mainSurfacePrimary
      },
      headerTintColor: colors[theme].textPrimary,
    }}>
			<Stack.Screen
				name={StackParams.BottomTabs}
				component={BottomTabs}
				options={{
					title: 'Home',
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={StackParams.NewCounterScreen}
				component={CounterTopTabs}
				options={{ title: 'Counter Name' }}
			/>
			<Stack.Screen
				name={StackParams.GroupScreen}
				component={GroupTopTabs}
				options={{ title: 'Group title' }}
			/>
		</Stack.Navigator>
	);
};

export default Stack;
