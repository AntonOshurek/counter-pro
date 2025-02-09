import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '../../../../entities/theme';
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
		primary: {
			color: colors[theme].textPrimary
		},
		secondary: {
			color: colors[theme].textSecondary
		},
		tertiary: {
			color: colors[theme].textTertiary
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
