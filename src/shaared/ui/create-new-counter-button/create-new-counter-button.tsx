//NATIVE
import { Pressable, Text } from 'react-native';
//TYPES
import type { CreateNewCounterButtonProps } from './model/create-new-counter-button.model';
//ICONS
import { PlusIcon } from '../../icons';
//STYLES
import style from './style/style';
import { globalStyle } from '../../../global/styles/style';

const CreateNewCounterButton = ({
	onPress
}: CreateNewCounterButtonProps): JSX.Element => {
	return (
		<Pressable style={style.createNewCounterButton} onPress={onPress}>
			<Text style={globalStyle.visuallyHidden}>create new counter</Text>
			<PlusIcon width={40} height={40} color='#000000' />
		</Pressable>
	);
};

export default CreateNewCounterButton;
