import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '@shared/types';
//COLORS
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		paragraph: {},
		large: {
			fontSize: 18
		},
		medium: {
			fontSize: 16
		},
		small: {
			fontSize: 16
		},
		xSmall: {
			fontSize: 14
		},
		primary: {
			color: colors[theme].textPrimary
		},
		secondary: {
			color: colors[theme].textSecondary
		},
		tertiary: {
			color: colors[theme].textTertiary
		},
		alwaysBlack: {
			color: colors[theme].alwaysBlack
		},
		alwaysWhite: {
			color: colors[theme].alwaysWhite
		},
		capitalize: {
			textTransform: 'capitalize'
		},
		lowercase: {
			textTransform: 'lowercase'
		},
		uppercase: {
			textTransform: 'uppercase'
		}
	});

export default style;
