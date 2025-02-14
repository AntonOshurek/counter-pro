//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../app/navigation/model';
//CONSTANTS
import { StackScreens } from '../../shared/constants';
//UI
import CreateButton from '../../shared/ui/create-button/create-button';

const CreateNewCounter = () => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	const goToNewCounter = () => {
		navigation.navigate(StackScreens.NewCounterScreen);
	};

	return <CreateButton onPress={goToNewCounter} hiddenText='Create new counter' />;
};

export default CreateNewCounter;
