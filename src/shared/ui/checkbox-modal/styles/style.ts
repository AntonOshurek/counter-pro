//NATIVE
import { StyleSheet } from 'react-native';
//MODEL
import type { ColorThemes } from '../../../../entities/theme';
//STYLES
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		overlay: {
			flex: 1,
			backgroundColor: '#00000070',
			justifyContent: 'center',
			alignItems: 'center'
		},
		container: {
			width: '90%',
			maxHeight: '70%',
			backgroundColor: colors[theme].mainSurfaceTertiary,
			borderRadius: 12,
			padding: 16,
			gap: 20
		},
		item: {
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 8
		}
	});

export { style };
