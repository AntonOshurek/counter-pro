//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
	NavigationStackParams,
	StackParams
} from '../../app/navigation/model/index.model';
//UI
import { CreateButton } from '../../shaared/ui';

const CreateNewGroup = (): JSX.Element => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	const goToNewGroup = () => {
		navigation.navigate(StackParams.GroupScreen);
	};

	return (
		<CreateButton onPress={goToNewGroup} hiddenText='Create new group of counters' />
	);
};

export default CreateNewGroup;
