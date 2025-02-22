//NATIVE
import { StyleSheet } from 'react-native';
//styles
import { itemsGaps, paddings } from '../../../shared/styles';

const style = StyleSheet.create({
	counterSettingsScreen: {
    paddingTop: 40,
		justifyContent: 'space-between',
		gap: itemsGaps.gapBetweenSettingGroups,
		paddingBottom: paddings.bottomPaddingToFirstElement
	}
});

export default style;
