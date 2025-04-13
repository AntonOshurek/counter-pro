import React from 'react';
//NATIVE
import { TouchableOpacity, View } from 'react-native';
//HOOKS
import useThemeResolver from '../hooks/useThemeResolver';
//MODEL
import { CheckboxProps } from './checkbox.model';
//STYLES
import { style } from './styles';
import { colors } from '../styles';

const CustomCheckbox = ({ value, onChange }: CheckboxProps) => {
	const theme = useThemeResolver();
	const s = style(theme);

	return (
		<TouchableOpacity onPress={onChange} style={[s.box, { width: 24, height: 24 }]}>
			{value && <View style={[s.inner, { backgroundColor: colors[theme].basicGreen }]} />}
		</TouchableOpacity>
	);
};

export default CustomCheckbox;
