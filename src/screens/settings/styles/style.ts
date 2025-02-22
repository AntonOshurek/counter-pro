//NATIVE
import { StyleSheet } from 'react-native';
//styles
import { itemsGaps } from '../../../shared/styles';

const style = StyleSheet.create({
	settingsScreen: {
		justifyContent: 'flex-end',
    gap: itemsGaps.gapBetweenSettingGroups,
    paddingBottom: 30
	}
});

export default style;
