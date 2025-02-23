//NATIVE
import { StyleSheet } from 'react-native';
//ENTITIES
import { ColorThemes } from '../../../../entities/theme';
//STYLES
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		counterNotFound: {
			backgroundColor: colors[theme].mainSurfacePrimary,
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center'
		}
	});

export { style };
