//NATIVE
import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '../../../../entities/theme';
//STYLES
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		groupListItem: {
			borderRadius: 10,
			padding: 10,
			backgroundColor: colors[theme].mainSurfacePrimary,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
    linkToGroup: {
      flex: 1,
    }
	});

export default style;
