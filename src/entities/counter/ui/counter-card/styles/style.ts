import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes } from '../../../../theme';
//STYLES
import { colors, paddings } from '../../../../../shared/styles';

const style = (theme: ColorThemes) =>
	StyleSheet.create({
		counterCard: {
			padding: paddings.cardSavePaddings,
			borderRadius: 10,
			backgroundColor: colors[theme].mainSurfaceSecondary
		},
		header: {
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center'
		},
		touchableHeader: {
			flex: 1,
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center'
		},
		controls: {
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		counterInfo: {
			flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
		}
	});

export default style;
