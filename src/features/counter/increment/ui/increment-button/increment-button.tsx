//NATIVE
import { Pressable } from 'react-native';
//FEATURES
import useIncrement from '../../increment';
//MODEL
import { IncrementButtonProps } from './model';
//UI
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';

const MiniIncrementButton = ({ counterId }: IncrementButtonProps) => {
	const increment = useIncrement({ counterId });

	return (
		<Pressable onPress={increment}>
			<Paragraph size={'large'} contentType={'primary'}>
				Inc
			</Paragraph>
		</Pressable>
	);
};

export default MiniIncrementButton;
