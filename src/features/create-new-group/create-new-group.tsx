//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
	NavigationStackParams,
	StackParams
} from '../../app/navigation/model/index.model';
//UI
import { CreateNewCounterButton } from '../../shaared/ui';

const CreateNewGroup = (): JSX.Element => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	const goToNewGroup = () => {
		navigation.navigate(StackParams.GroupScreen);
	};

	return <CreateNewCounterButton onPress={goToNewGroup} />;
};

export default CreateNewGroup;
