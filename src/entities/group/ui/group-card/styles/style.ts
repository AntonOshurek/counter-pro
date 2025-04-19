//NATIVE
import { StyleSheet } from 'react-native';
//STYLES
import { paddings } from '@shared/styles';

const style = StyleSheet.create({
	groupCard: {
		flex: 1,
		borderRadius: 10,
		backgroundColor: 'transparent',
		gap: 5
	},
	cardHeader: {
		flexDirection: 'row',
		gap: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: paddings.cardSavePaddings
	},
	cardTitle: {
		gap: 5,
		flex: 1
	}
});

export default style;
