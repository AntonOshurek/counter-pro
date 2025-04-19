import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '@shared/types';
//STYLES
import { colors } from '../../../../shared/styles';
import { paddings } from '../../../../shared/styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		ScreenLayout: {
			flex: 1,
			paddingInline: paddings.standardSavePadding,
			paddingBottom: paddings.standardSavePadding,
			paddingBlockStart: 10,
			backgroundColor: colors[theme].mainSurfacePrimary
		},
		ScreenLayoutWithoutPadding: {
			flex: 1,
			backgroundColor: colors[theme].mainSurfacePrimary
		}
	});

export default style;
