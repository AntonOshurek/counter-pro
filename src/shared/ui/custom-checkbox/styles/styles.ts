//NATIVE
import { StyleSheet } from 'react-native';
//MODEL
import type { ColorThemes } from '@shared/types';
//STYLES
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		box: {
			borderWidth: 2,
			borderColor: colors[theme].borderColor,
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 4,
			marginRight: 8
		},
		inner: {
			width: '60%',
			height: '60%',
			borderRadius: 2
		}
	});

export { style };
