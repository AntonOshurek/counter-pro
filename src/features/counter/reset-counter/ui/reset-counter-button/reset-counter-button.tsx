import { View } from 'react-native';
//FEATURES
import useResetCounter from '../../reset-counter';
//UI
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';
import ResetButton from '../../../../../shared/ui/reset-counter-button/reset-counter-button';
//MODEL
import type { ResetCounterButtonProps } from './reset-counter-button.model';
//STYLES
import { style } from './style';

const ResetCounterButton = ({ counterId }: ResetCounterButtonProps) => {
	const resetButton = useResetCounter({ counterId });

	return (
		<View style={style.resetCounterButton}>
			<Paragraph contentType={'primary'} size={'medium'}>
				Reset Counter
			</Paragraph>

			<ResetButton onReset={resetButton} />
		</View>
	);
};

export default ResetCounterButton;
