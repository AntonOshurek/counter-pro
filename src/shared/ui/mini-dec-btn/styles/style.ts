//NATIVE
import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '@shared/types';
//STYLES
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		miniIncBtn: {
			backgroundColor: colors[theme].mainSurfaceTertiary,
			borderRadius: 10,
			paddingVertical: 5,
			paddingHorizontal: 5,
			alignItems: 'center',
			justifyContent: 'center'
		}
	});

export default style;
