//NATIVE
import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '../../../../../../entities/theme';
//styles
import { colors } from '../../../../../../shared/styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		changeNameField: {
      gap: 3
    },
		input: {
			fontSize: 16,
			borderColor: 'transparent',
			borderWidth: 1,
		},
		inputFocused: {
			color: colors[theme].textPrimary,
			borderColor: colors[theme].switchActive,
			borderWidth: 1
		},
		inputBlurred: {
			backgroundColor: 'transparent',
			color: colors[theme].textSecondary
		}
	});

export default style;
