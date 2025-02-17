//NATIVE
import { StyleSheet } from 'react-native';
//STYLES
import { paddings } from '../../../../shared/styles';

const style = StyleSheet.create({
	groupCard: {
		borderRadius: 10,
		padding: paddings.cardSavePaddings,
		backgroundColor: 'transparent'
	},
	cardHeader: {
		flexDirection: 'row',
		gap: 10,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	cardTitle: {
		gap: 5,
		flex: 1,
	}
});

export default style;
