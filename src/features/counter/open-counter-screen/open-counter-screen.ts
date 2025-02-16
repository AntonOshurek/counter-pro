//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../../app/navigation/model';
//CONSTANTS
import { StackScreens } from '../../../shared/constants';

const useOpenCounterScreen = () => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	return () => {
		navigation.navigate(StackScreens.CounterScreen);
	};
};

export default useOpenCounterScreen;
