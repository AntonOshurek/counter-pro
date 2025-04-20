import { useEffect, useState } from 'react';
//FEATURES
import useChangeStep from '../../change-step';
//UI
import { InputField } from '@shared/ui/';
//MODEL
import type { ChangeStepInputProps } from './model/change-step-input.model';
//TEXT
import { COUNTER_TEXT } from '@shared/text-content/text-content';

const ChangeStepInput = ({ counterId, currentStep }: ChangeStepInputProps) => {
	const [step, setStep] = useState<number>(currentStep);
	const changeStep = useChangeStep({ counterId });

	useEffect(() => {
		changeStep(step);
	}, [step, changeStep]);

	const handleNameChange = (text: string) => {
		const filteredText = text.replace(/[^0-9]/g, '');
		const numericValue = Number(filteredText);

		if (numericValue > 999) {
			setStep(999);
		} else {
			setStep(numericValue);
		}
	};

	return (
		<InputField
			onChange={handleNameChange}
			value={step.toString()}
			label={COUNTER_TEXT.changeCounterStepInputLabel}
			additionalLabel={COUNTER_TEXT.changeCounterStepAdditionalLabel}
			inputType={'numeric'}
		/>
	);
};

export default ChangeStepInput;
