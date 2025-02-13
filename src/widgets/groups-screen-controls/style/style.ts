import { StyleSheet } from 'react-native';
//STYLES
import { paddings } from '../../../shaared/styles';

const style = StyleSheet.create({
	groupsScreenControlsWidget: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		position: 'absolute',
		bottom: paddings.standardSavePadding,
		right: paddings.standardSavePadding,
		width: '100%'
	}
});

export default style;
