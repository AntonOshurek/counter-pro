//NATIVE
import { Pressable, Text } from 'react-native';
//ICONS
import { PlusIcon } from '../../icons';
//STYLES
import style from './style/style';
import { globalStyle } from '../../../global/styles/style';

const CreateNewCounterButton = (): JSX.Element => {
	return (
		<Pressable style={style.createNewCounterButton}>
			<Text style={globalStyle.visuallyHidden}>create new counter</Text>
			<PlusIcon width={40} height={40} color='#000000' />
		</Pressable>
	);
};

export default CreateNewCounterButton;
