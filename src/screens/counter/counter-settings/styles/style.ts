//NATIVE
import { StyleSheet } from 'react-native';
//STYLES
import { itemsGaps, paddings } from '@shared/styles';

const style = StyleSheet.create({
	counterSettingsScreen: {
		gap: itemsGaps.gapBetweenSettingGroups,
		paddingBottom: paddings.bottomPaddingToFirstElement,
		paddingTop: 10
	},
	settingsGroup: {
		gap: itemsGaps.gapBetweenSettingGroups
	}
});

export default style;
