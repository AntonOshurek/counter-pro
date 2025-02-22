//NATIVE
import { StyleSheet } from 'react-native';
//styles
import { itemsGaps } from '../../../shared/styles';

const style = StyleSheet.create({
	counterSettingsScreen: {
		justifyContent: 'flex-end',
		gap: itemsGaps.gapBetweenSettingGroups
	}
});

export default style;
