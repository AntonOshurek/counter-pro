//NATIVE
import { StyleSheet } from 'react-native';
//TYPES
import { ColorThemes } from '@entities/theme';
//STYLES
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		textInputField: {
			gap: 3
		},
		input: {
			fontSize: 16,
			borderColor: 'transparent',
			borderWidth: 1
		},
		inputFocused: {
			color: colors[theme].textPrimary,
			borderColor: colors[theme].controlActive,
			borderWidth: 1
		},
		inputBlurred: {
			backgroundColor: 'transparent',
			color: colors[theme].textSecondary
		}
	});

export { style };
