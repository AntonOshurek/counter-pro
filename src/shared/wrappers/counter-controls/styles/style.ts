//NATIVE
import { StyleSheet } from 'react-native';
//STYLES
import { paddings } from '../../../styles';

const style = StyleSheet.create({
	counterControls: {
		position: 'absolute',
		paddingVertical: paddings.bottomPaddingToFirstElement,
		paddingInline: 20,
		bottom: 0,
		left: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 20
	}
});

export default style;
