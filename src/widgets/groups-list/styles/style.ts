import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '../../../entities/theme';
//STYLES
import { colors } from '../../../shaared/styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		groupsList: {
			paddingInline: 20,
			paddingTop: 20
		},
		group: {
			borderRadius: 10,
			padding: 10,
			backgroundColor: colors[theme].mainSurfaceTertiary
		},
    draggedGroup: {
      opacity: 0.6
    }
	});

export default style;
