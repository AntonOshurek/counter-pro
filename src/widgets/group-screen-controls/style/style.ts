import { StyleSheet } from 'react-native';
//STYLES
import { paddings } from '../../../shared/styles';

const style = StyleSheet.create({
	groupScreenControlsWidget: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		position: 'absolute',
		bottom: paddings.standardSavePadding,
		left: paddings.standardSavePadding
	}
});

export default style;
