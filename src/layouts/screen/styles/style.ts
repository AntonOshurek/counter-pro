import { StyleSheet } from 'react-native';
import { ColorThemes } from '../../../entities/theme';
import { colors } from '../../../shaared/styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		ScreenLayout: {
			flex: 1,
			paddingInline: 20,
			paddingBottom: 20,
			paddingBlockStart: 10,
			backgroundColor: colors[theme].mainSurfacePrimary
		},
		ScreenLayoutWithoutPadding: {
			flex: 1,
			backgroundColor: colors[theme].mainSurfacePrimary
		}
	});

export default style;
