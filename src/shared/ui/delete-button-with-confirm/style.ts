//NATIVE
import { StyleSheet } from 'react-native';
//ENTITIES
import { ColorThemes } from '../../../entities/theme';
//STYLES
import { colors } from '../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		deleteButtonWithConfirm: {
			backgroundColor: colors[theme].deleteColor,
			paddingVertical: 8,
			paddingHorizontal: 14
		}
	});

export default style;
