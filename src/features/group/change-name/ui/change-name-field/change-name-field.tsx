import { useEffect, useState } from 'react';
//FEATURES
import useChangeName from '../../change-name';
//UI
import InputField from '../../../../../shared/ui/input-field/input-field';
//MODEL
import { ChangeNameFieldProps } from './model/change-name-field.model';
//TEXT
import { groupText } from '../../../../../shared/text-content/text-content';

const ChangeNameField = ({ groupName, groupId }: ChangeNameFieldProps) => {
	const [name, setName] = useState<string>(groupName);
	const changeName = useChangeName({ groupId });

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
			label={groupText.changeGroupNameInputLabel}
		/>
	);
};

export default ChangeNameField;
