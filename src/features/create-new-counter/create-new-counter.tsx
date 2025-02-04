//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
	NavigationStackParams,
	StackParams
} from '../../app/navigation/model/index.model';
//UI
import CreateButton from '../../shaared/ui/create-button/create-button';

const CreateNewCounter = () => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	const goToNewCounter = () => {
		navigation.navigate(StackParams.NewCounterScreen);
	};

	return <CreateButton onPress={goToNewCounter} hiddenText='Create new counter' />;
};

export default CreateNewCounter;
