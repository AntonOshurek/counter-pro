//NATIVE
import { StyleSheet, Dimensions } from 'react-native';
//MODEL
import type { ColorThemes } from '@shared/types';
//STYLES
import { colors } from '../../../styles';

const { width } = Dimensions.get('window');

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		modalWrapper: {},
		overlay: {
			flex: 1,
			backgroundColor: '#00000070',
			justifyContent: 'center',
			alignItems: 'center'
		},
		container: {
			position: 'absolute',
			bottom: '0%',
			left: '50%',
			transform: [{ translateX: -(width * 0.9) / 2 }],
			zIndex: 1,
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
