import { StyleSheet } from 'react-native';
import { paddings } from '../../../shared/styles';

const style = StyleSheet.create({
	homeScreenControlsWidget: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		position: 'absolute',
		bottom: paddings.standardSavePadding,
		left: paddings.standardSavePadding
	}
});

export default style;
