import { useLayoutEffect } from 'react';
//NAVIGATION
import { useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { CounterScreen, CounterSettingsScreen } from '../../screens';
//STORE
import { useAppSelector } from '../../shared/store';
//ENTITIES
import { SelectorGetCounterName } from '../../entities/counter/store/selectors/counter-selectors';
//HOOKS
import UseThemeResolver from '../../shared/hooks/useThemeResolver';
//CONSTANTS
import { CounterTopTabsScreens } from '../../shared/constants';
//STYLES
import { colors } from '../../shared/styles';
//TYPES
import { CounterTopTabsNavigationParams } from './model/';
import {
	CounterScreenRouteProp,
	CounterTopTabsProps
} from './model/counter-top-tabs.model';

const CounterTopTabs = ({ navigation }: CounterTopTabsProps) => {
	const Tab = createMaterialTopTabNavigator<CounterTopTabsNavigationParams>();
	const theme = UseThemeResolver();

	const route = useRoute<CounterScreenRouteProp>();
	const { counter } = route.params || {};

	const counterName = useAppSelector(SelectorGetCounterName(counter.id));

	useLayoutEffect(() => {
		navigation.setOptions({
			title: counterName
		});
	}, [navigation, counter, counterName]);

	return (
		<Tab.Navigator
			initialRouteName={CounterTopTabsScreens.Counter}
			screenOptions={{
				tabBarStyle: {
					backgroundColor: colors[theme].mainSurfacePrimary
				},
				tabBarActiveTintColor: colors[theme].textPrimary,
				tabBarInactiveTintColor: colors[theme].textSecondary
			}}
		>
			<Tab.Screen
				name={CounterTopTabsScreens.Counter}
				component={CounterScreen}
				initialParams={{ counter }}
			/>
			<Tab.Screen
				name={CounterTopTabsScreens.Settings}
				component={CounterSettingsScreen}
				initialParams={{ counter }}
			/>
		</Tab.Navigator>
	);
};

export default CounterTopTabs;
