//NATIVE
import { Pressable, Text } from 'react-native';
//ICONS
import { PlusIcon } from '../../icons';
//STYLES
import style from './style/style';

const CreateNewCounterButton = (): JSX.Element => {
	return (
		<Pressable style={style.createNewCounterButton}>
			<Text>
				<PlusIcon width={40} height={40} color='#000000' />
			</Text>
		</Pressable>
	);
};

export default CreateNewCounterButton;
