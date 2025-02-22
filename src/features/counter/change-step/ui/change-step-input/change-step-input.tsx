import { useEffect, useState } from 'react';
//FEATURES
import useChangeStep from '../../change-step';
//UI
import TextInputField from '../../../../../shared/ui/text-input-field/text-input-field';
//MODEL
import type { ChangeStepInputProps } from './change-step-input.model';

const ChangeStepInput = ({ counterId, currentStep }: ChangeStepInputProps) => {
	const [step, setStep] = useState<number>(currentStep);
	const changeStep = useChangeStep({ counterId });

	useEffect(() => {
		changeStep(step);
	}, [step, changeStep]);

	const handleNameChange = (text: string) => {
		setStep(+text);
	};

	return (
		<TextInputField
			onChange={handleNameChange}
			value={step.toString()}
			label={'Step'}
		/>
	);
};

export default ChangeStepInput;
