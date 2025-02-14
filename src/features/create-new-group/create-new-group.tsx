//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../app/navigation/model';
//CONSTANTS
import { StackScreens } from '../../shared/constants';
//UI
import CreateButton from '../../shared/ui/create-button/create-button';

const CreateNewGroup = () => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	const goToNewGroup = () => {
		navigation.navigate(StackScreens.GroupScreen, {});
	};

	return (
		<CreateButton onPress={goToNewGroup} hiddenText='Create new group of counters' />
	);
};

export default CreateNewGroup;
