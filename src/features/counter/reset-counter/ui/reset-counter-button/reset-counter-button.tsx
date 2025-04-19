//NATIVE
import { View } from 'react-native';
//FEATURES
import useResetCounter from '../../reset-counter';
//UI
import { Paragraph, ResetButton } from '@shared/ui/';
//MODEL
import type { ResetCounterButtonProps } from './model/reset-counter-button.model';
//STYLES
import { style } from './styles/style';
//TEXT
import { counterText } from '@shared/text-content/text-content';

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
