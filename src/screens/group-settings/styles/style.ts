//NATIVE
import { StyleSheet } from 'react-native';
//STYLES
import { itemsGaps, paddings } from '../../../shared/styles';

const style = StyleSheet.create({
	groupSettingsScreen: {
		paddingTop: 40,
		justifyContent: 'space-between',
		gap: itemsGaps.gapBetweenSettingGroups,
		paddingBottom: paddings.bottomPaddingToFirstElement
	},
	settingsGroup: {
		gap: itemsGaps.gapBetweenSettingGroups
	}
});

export default style;
