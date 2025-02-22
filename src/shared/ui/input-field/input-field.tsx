import { useState } from 'react';
//NATIVE
import { View, TextInput } from 'react-native';
//UI
import Paragraph from '../paragraph/paragraph';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import type { InputFieldProps } from './input-field.model';
//STYLES
import { style } from './style';

const InputField = ({ label, value, onChange, inputType }: InputFieldProps) => {
	const [isFocused, setIsFocused] = useState(false);

	const theme = useThemeResolver();
	const s = style(theme);

	return (
		<View style={s.textInputField}>
			<Paragraph contentType={'secondary'} size={'xSmall'}>
				{label}
			</Paragraph>

			<TextInput
				style={[s.input, isFocused ? s.inputFocused : s.inputBlurred]}
				onChangeText={onChange}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				value={value}
				keyboardType={inputType ? inputType : 'default'}
			/>
		</View>
	);
};

export default InputField;
