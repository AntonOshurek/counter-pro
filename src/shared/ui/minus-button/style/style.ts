//NATIVE
import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '@shared/types';
//COLORS
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		minusButton: {
			backgroundColor: colors[theme].mainSurfaceTertiary,
			borderRadius: 100,
			paddingVertical: 10,
			paddingHorizontal: 10
		}
	});

export default style;
