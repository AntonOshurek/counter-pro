//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
	NavigationStackParams,
	StackParams
} from '../../app/navigation/model/index.model';
//UI
import { CreateNewCounterButton } from '../../shaared/ui';

const CreateNewCounter = (): JSX.Element => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	const goToNewCounter = () => {
		navigation.navigate(StackParams.NewCounterScreen);
	};

	return <CreateNewCounterButton onPress={goToNewCounter} />;
};

export default CreateNewCounter;
