import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '../../../../entities/theme';
//COLORS
import { colors } from '../../../styles';

const style = (theme: ColorThemes) => StyleSheet.create({
	createButton: {
		borderColor: colors[theme].textPrimary,
		borderWidth: 1,
		borderRadius: 100,
		paddingVertical: 10,
		paddingHorizontal: 10
	}
});

export default style;
