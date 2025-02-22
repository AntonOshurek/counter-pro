import { useEffect, useState } from 'react';
//FEATURES
import useChangeName from '../../change-name';
//UI
import InputField from '../../../../../shared/ui/input-field/input-field';
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
		<InputField onChange={handleNameChange} value={name} label={'Name'} />
	);
};

export default ChangeNameField;
