//NATIVE
import { Pressable, Text } from 'react-native';
//TYPES
import type { CreateButtonProps } from './model/create-button.model';
//ICONS
import { PlusIcon } from '../../icons';
//STYLES
import style from './style/style';
import { globalStyle } from '../../../global/styles/style';

const CreateButton = ({ onPress, hiddenText }: CreateButtonProps): JSX.Element => {
	return (
		<Pressable style={style.createButton} onPress={onPress}>
			<Text style={globalStyle.visuallyHidden}>{hiddenText}</Text>
			<PlusIcon width={40} height={40} color='#000000' />
		</Pressable>
	);
};

export default CreateButton;
