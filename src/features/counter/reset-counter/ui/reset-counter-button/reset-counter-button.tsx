import { TouchableOpacity } from 'react-native';
//FEATURES
import useResetCounter from '../../reset-counter';
//UI
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';
//MODEL
import type { ResetCounterButtonProps } from './reset-counter-button.model';

const ResetCounterButton = ({ counterId }: ResetCounterButtonProps) => {
	const resetButton = useResetCounter({ counterId });

	return (
		<TouchableOpacity onPress={resetButton}>
			<Paragraph contentType={'primary'} size={'medium'}>
				reset counter
			</Paragraph>
		</TouchableOpacity>
	);
};

export default ResetCounterButton;
