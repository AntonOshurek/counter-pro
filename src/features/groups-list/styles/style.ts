import { StyleSheet } from 'react-native';
//TYPES
import { ColorThemes } from '../../../entities/theme';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		groupsList: {
			paddingInline: 20,
			paddingTop: 20
		},
		draggedGroup: {
			opacity: 0.6
		}
	});

export default style;
