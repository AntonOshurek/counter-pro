//NATIVE
import { Pressable } from 'react-native';
//FEATURES
import useIncrement from '../../decrement';
//MODEL
import { MiniIncrementButtonProps } from './mini-decrement-button.model';
//UI
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';

const MiniIncrementButton = ({ counterId }: MiniIncrementButtonProps) => {
	const increment = useIncrement({ counterId });

	return (
		<Pressable onPress={increment}>
			<Paragraph size={'large'} contentType={'primary'}>
				Dec
			</Paragraph>
		</Pressable>
	);
};

export default MiniIncrementButton;
