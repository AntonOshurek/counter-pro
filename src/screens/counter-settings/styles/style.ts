//NATIVE
import { StyleSheet } from 'react-native';
//styles
import { itemsGaps, paddings } from '../../../shared/styles';

const style = StyleSheet.create({
	counterSettingsScreen: {
		justifyContent: 'flex-end',
		gap: itemsGaps.gapBetweenSettingGroups,
		paddingBottom: paddings.bottomPaddingToFirstElement
	}
});

export default style;
