//NATIVE
import { RouteProp } from '@react-navigation/native';
//NAVIGATION
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//ENTITIES
import { Counter } from '../../../entities/counter';
//CONSTANTS
import { CounterTopTabsScreens, StackScreens } from '../../../shared/constants';
//MODEL
import type { NavigationStackParams } from './stack.model';

interface CounterScreenRouteProps {
	counter?: Counter;
}

type CounterTopTabsNavigationParams = {
	[CounterTopTabsScreens.Counter]: CounterScreenRouteProps;
	[CounterTopTabsScreens.Settings]: CounterScreenRouteProps;
};

type CounterScreenRouteProp = RouteProp<
	NavigationStackParams,
	StackScreens.CounterScreen
>;

type CounterScreenNavigationProps = NativeStackNavigationProp<
	NavigationStackParams,
	StackScreens.CounterScreen
>;

interface CounterTopTabsProps {
	navigation: CounterScreenNavigationProps;
}

export {
	CounterTopTabsNavigationParams,
	CounterScreenRouteProps,
	CounterScreenNavigationProps,
	CounterTopTabsProps,
	CounterScreenRouteProp
};
