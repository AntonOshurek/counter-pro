import { useEffect, useState } from 'react';
//FEATURES
import useChangeStep from '../../change-step';
//UI
import InputField from '../../../../../shared/ui/input-field/input-field';
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
		<InputField
			onChange={handleNameChange}
			value={step.toString()}
			label={'Step'}
			inputType={'numeric'}
		/>
	);
};

export default ChangeStepInput;
