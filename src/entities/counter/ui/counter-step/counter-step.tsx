//NATIVE
import { View } from 'react-native';
//STORE
import { useAppSelector } from '../../../../shared/store';
//ENTITIES
import { SelectorGetCounterStep } from '../../store/selectors/counter-selectors';
//UI
import Paragraph from '../../../../shared/ui/paragraph/paragraph';
//MODEL
import { CounterStepProps } from './model/counter-step.model';
//TEXT
import { counterText } from '../../../../shared/text-content/text-content';

const CounterStep = ({ additionalClass, counterId }: CounterStepProps) => {
	const step = useAppSelector(SelectorGetCounterStep(counterId));

	return (
		<View style={additionalClass}>
			<Paragraph contentType={'tertiary'} size={'xSmall'}>
				{counterText.stepInfoParagraph} {step}
			</Paragraph>
		</View>
	);
};

export default CounterStep;
