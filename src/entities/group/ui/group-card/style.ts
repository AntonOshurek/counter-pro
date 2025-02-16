//NATIVE
import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '../../../theme';
//STYLES
import { colors, paddings } from '../../../../shared/styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		groupCard: {
			borderRadius: 10,
			padding: paddings.cardSavePaddings,
			backgroundColor: colors[theme].mainSurfacePrimary
		}
	});

export default style;
