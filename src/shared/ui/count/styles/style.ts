import { StyleSheet } from 'react-native';
//ENTITIES
import { ColorThemes } from '../../../../entities/theme';
//STYLES
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		Count: {
			justifyContent: 'center',
			alignItems: 'center',
			flex: 1
		},
		countText: {
			color: colors[theme].textPrimary,
			fontSize: 180,
      textAlign: 'center'
		}
	});

export default style;
