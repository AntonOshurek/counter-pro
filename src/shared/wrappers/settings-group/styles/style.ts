import { StyleSheet } from 'react-native';
//TYPES
import { ColorThemes } from '@shared/types';
//COLORS
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		settingsGroupWrapper: {
			backgroundColor: colors[theme].mainSurfaceTertiary,
			padding: 20,
			borderRadius: 20,
			gap: 40
		}
	});

export default style;
