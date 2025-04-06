import { StyleSheet } from 'react-native';
//ENTITIES
import type { ColorThemes } from '../../../../entities/theme';
//STYLES
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		dropDown: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			paddingVertical: 10
		}
	});

export default style;
