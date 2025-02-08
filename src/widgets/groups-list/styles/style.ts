import { StyleSheet } from 'react-native';
import { ColorThemes } from '../../../entities/theme';
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
		}
	});

export default style;
