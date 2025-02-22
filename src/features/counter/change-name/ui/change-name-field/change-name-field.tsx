import { useEffect, useState } from 'react';
//FEATURES
import useChangeName from '../../change-name';
//UI
import TextInputField from '../../../../../shared/ui/text-input-field/text-input-field';
//MODEL
import { ChangeNameFieldProps } from './model/change-name-field.model';

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
		<TextInputField onChange={handleNameChange} value={name} label={'Counter Name'} />
	);
};

export default ChangeNameField;
