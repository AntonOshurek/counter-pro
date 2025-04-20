import { useLayoutEffect } from 'react';
//NAVIGATION
import { useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { CounterScreen, CounterSettingsScreen, NotFoundScreen } from '@screens';
//STORE
import { useAppSelector } from '@shared/store';
//ENTITIES
import { SelectorGetCounter } from '@entities/counter/';
//HOOKS
import UseThemeResolver from '@shared/hooks/useThemeResolver';
//CONSTANTS
import {
	CounterTopTabsScreens,
	symbolsAmountOnNavigationHeader
} from '@shared/constants';
//LIBS
import { truncateWithEllipsis } from '@shared/lib/word-lib';
//STYLES
import { colors } from '@shared/styles';
//TYPES
import type {
	CounterTopTabsNavigationParams,
	CounterScreenRouteProp,
	CounterTopTabsProps
} from '@shared/types/navigation';
//TEXT
import { COUNTER_TEXT } from '@shared/text-content/text-content';

const CounterTopTabs = ({ navigation }: CounterTopTabsProps) => {
	const Tab = createMaterialTopTabNavigator<CounterTopTabsNavigationParams>();
	const theme = UseThemeResolver();

	const route = useRoute<CounterScreenRouteProp>();
	const { counterId } = route.params || {};
	const counter = useAppSelector(SelectorGetCounter(counterId));

	useLayoutEffect(() => {
		navigation.setOptions({
			title: counter
				? truncateWithEllipsis(counter.name, symbolsAmountOnNavigationHeader)
				: 'Unknown counter'
		});
	}, [navigation, counter]);

	if (!counter) {
		return <NotFoundScreen notFoundText={COUNTER_TEXT.counterNotFound} />;
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
