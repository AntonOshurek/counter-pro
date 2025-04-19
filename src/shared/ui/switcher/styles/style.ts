import { StyleSheet } from 'react-native';
//TYPES
import { ColorThemes } from '@shared/types';
//COLORS
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		switcher: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		label: {
			color: colors[theme].textPrimary,
			textTransform: 'capitalize',
			fontSize: 16
		}
	});

export default style;
