import { useEffect, useState } from 'react';
//FEATURES
import useChangeName from '../../change-name';
//UI
import { InputField } from '@shared/ui/';
//MODEL
import type { ChangeNameFieldProps } from './model/change-name-field.model';
//TEXT
import { counterText } from '@shared/text-content/text-content';

const ChangeNameField = ({ counterName, counterId }: ChangeNameFieldProps) => {
	const [name, setName] = useState<string>(counterName);
	const changeName = useChangeName({ counterId });

	useEffect(() => {
		changeName(name);
	}, [name, changeName]);

	const handleNameChange = (text: string) => {
		setName(text);
	};

	return (
		<InputField
			onChange={handleNameChange}
			value={name}
			label={counterText.changeCounterNameInputLabel}
		/>
	);
};

export default ChangeNameField;
