//NATIVE
import { View } from 'react-native';
//STORE
import { useAppSelector } from '@shared/store';
import { SelectorGetCounterStep } from '../../store/selectors/counter-selectors';
//UI
import { Paragraph } from '@shared/ui';
//MODEL
import type { CounterStepProps } from './model/counter-step.model';
//TEXT
import { COUNTER_TEXT } from '@shared/text-content/text-content';

const CounterStep = ({ additionalClass, counterId }: CounterStepProps) => {
	const step = useAppSelector(SelectorGetCounterStep(counterId));

	return (
		<View style={additionalClass}>
			<Paragraph contentType={'tertiary'} size={'xSmall'}>
				{COUNTER_TEXT.stepInfoParagraph} {step}
			</Paragraph>
		</View>
	);
};

export default CounterStep;
