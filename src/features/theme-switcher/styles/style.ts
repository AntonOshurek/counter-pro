//NATIVE
import { StyleSheet, Platform } from 'react-native';
//TYPES
import type { ColorThemes } from '../../../entities/theme';
//STYLES
import { colors } from '../../../shaared/styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		themeSwitcher: {
			gap: 20
		},
		themeSwitcherTitle: {
			color: colors[theme].textSecondary,
			fontSize: 20,
			textTransform: 'capitalize'
		},
		themeSwitcherGroup: {
			...Platform.select({
				ios: { gap: 20 }
			})
		}
	});

export default style;
