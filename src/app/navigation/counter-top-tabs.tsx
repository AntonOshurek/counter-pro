import { useLayoutEffect } from 'react';
//NAVIGATION
import { useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { CounterScreen, CounterSettingsScreen } from '../../screens';
//STORE
import { useAppSelector } from '../../shared/store';
//ENTITIES
import { SelectorGetCounter } from '../../entities/counter/';
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
import { View } from 'react-native';
import Paragraph from '../../shared/ui/paragraph/paragraph';

const CounterTopTabs = ({ navigation }: CounterTopTabsProps) => {
	const Tab = createMaterialTopTabNavigator<CounterTopTabsNavigationParams>();
	const theme = UseThemeResolver();

	const route = useRoute<CounterScreenRouteProp>();
	const { counterId } = route.params || {};
	const counter = useAppSelector(SelectorGetCounter(counterId));

	useLayoutEffect(() => {
		navigation.setOptions({
			title: counter ? counter.name : 'Unknown counter'
		});
	}, [navigation, counter]);

	if (!counter) {
		return (
			<View>
				<Paragraph contentType={'primary'} size={'large'}>
					Don't found this counter
				</Paragraph>
			</View>
		);
	} else {
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
					initialParams={{ counterId: counter.id }}
				/>
				<Tab.Screen
					name={CounterTopTabsScreens.Settings}
					component={CounterSettingsScreen}
					initialParams={{ counterId: counter.id }}
				/>
			</Tab.Navigator>
		);
	}
};

export default CounterTopTabs;
