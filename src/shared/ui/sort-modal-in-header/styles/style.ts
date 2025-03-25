//NATIVE
import { StyleSheet } from 'react-native';
//TYPES
import { ColorThemes } from '../../../../entities/theme';
//STYLES
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		overlay: {
			flex: 1,
			backgroundColor: 'rgba(0, 0, 0, 0.5)'
		},
		menu: {
			position: 'absolute',
			top: 50,
			right: 10,
			backgroundColor: colors[theme].mainSurfaceSecondary,
			borderRadius: 5,
			elevation: 5
		},
		item: {
			borderRadius: 5,
			paddingInline: 20,
			paddingVertical: 10
		},
		selected: {
			backgroundColor: colors[theme].mainSurfaceTertiary
		}
	});

export default style;
