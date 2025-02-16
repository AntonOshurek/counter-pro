import { StyleSheet } from 'react-native';
//STYLES
import { paddings } from '../../../shared/styles';

const style = StyleSheet.create({
	groupsScreenControlsWidget: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		position: 'absolute',
		bottom: paddings.standardSavePadding,
		right: paddings.standardSavePadding
	}
});

export default style;
