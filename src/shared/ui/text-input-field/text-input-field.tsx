import { useState } from 'react';
//NATIVE
import { View, TextInput } from 'react-native';
//UI
import Paragraph from '../paragraph/paragraph';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import type { TextInputProps } from './text-input-field.model';
//STYLES
import { style } from './style';

const TextInputField = ({ label, value, onChange }: TextInputProps) => {
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
			/>
		</View>
	);
};

export default TextInputField;
