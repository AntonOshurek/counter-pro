//NATIVE
import { View } from 'react-native';
//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
	NavigationStackParams,
	StackParams
} from '../../app/navigation/model/navigation.model';
//UI
import { CreateNewCounterButton } from '../../shaared/ui';
//STYLES
import style from './style/style';

const CreateCounterWidget = (): JSX.Element => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	const goToNewCounter = () => {
		navigation.navigate(StackParams.NewCounterScreen);
	};

	return (
		<View style={style.createCounterWidget}>
			<CreateNewCounterButton onPress={goToNewCounter} />
		</View>
	);
};

export default CreateCounterWidget;
