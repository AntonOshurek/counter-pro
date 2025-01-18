//NATIVE
import { View } from 'react-native';
//UI
import { CreateNewCounterButton } from '../../shaared/ui';
//STYLES
import style from './style/style';

const CreateCounterWidget = (): JSX.Element => {
	return (
		<View style={style.createCounterWidget}>
			<CreateNewCounterButton />
		</View>
	);
};

export default CreateCounterWidget;
