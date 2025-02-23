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
//TEXT
import { counterText } from '../../../../../shared/text-content/text-content';

const ResetCounterButton = ({ counterId }: ResetCounterButtonProps) => {
	const resetButton = useResetCounter({ counterId });

	return (
		<View style={style.resetCounterButton}>
			<Paragraph contentType={'primary'} size={'medium'}>
				{counterText.resetCounterButtonText}
			</Paragraph>

			<ResetButton onReset={resetButton} />
		</View>
	);
};

export default ResetCounterButton;
