//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../../app/navigation/model';
//CONSTANTS
import { StackScreens } from '../../../shared/constants';

const useCreateNewGroup = () => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	return () => {
		navigation.navigate(StackScreens.GroupScreen, {});
		// TODO: dispatch(addGroup(newGroup));
	};
};

export default useCreateNewGroup;
