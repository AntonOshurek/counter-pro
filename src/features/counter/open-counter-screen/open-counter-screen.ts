//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../../app/navigation/model';
//CONSTANTS
import { StackScreens } from '../../../shared/constants';
//MODEL
import type { OpenCounterScreenProps } from './model/open-counter-screen.model';

const useOpenCounterScreen = ({ counter }: OpenCounterScreenProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	return () => {
		navigation.navigate(StackScreens.CounterScreen, { counter });
	};
};

export default useOpenCounterScreen;
