import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '@shared/types';
//COLORS
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		mainButton: {
			backgroundColor: colors[theme].mainSurfaceTertiary,
			borderRadius: 20,
			paddingVertical: 10,
			paddingHorizontal: 10,
			justifyContent: 'center',
			alignItems: 'center',
			borderWidth: 2,
			borderColor: colors[theme].borderColor
		}
	});

export default style;
