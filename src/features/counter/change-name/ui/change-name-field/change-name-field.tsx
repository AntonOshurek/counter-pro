import { useEffect, useState } from 'react';
//NATIVE
import { TextInput, View } from 'react-native';
//FEATURES
import useChangeName from '../../change-name';
//HOOKS
import useThemeResolver from '../../../../../shared/hooks/useThemeResolver';
//UI
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';
//MODEL
import { ChangeNameFieldProps } from './model/change-name-field.model';
//STYLES
import style from './styles/style';

const ChangeNameField = ({ counterName, counterId }: ChangeNameFieldProps) => {
	const [name, setName] = useState<string>(counterName);
	const changeName = useChangeName({ counterId });

	const theme = useThemeResolver();
	const s = style(theme);

	const handleNameChange = (text: string) => {
		setName(text);
	};

	useEffect(() => {
		changeName(name);
	}, [name, changeName]);

	return (
		<View style={s.changeNameField}>
			<Paragraph contentType={'secondary'} size={'xSmall'}>
				Change CounterName
			</Paragraph>

			<TextInput style={s.input} value={name} onChangeText={handleNameChange} />
		</View>
	);
};

export default ChangeNameField;
