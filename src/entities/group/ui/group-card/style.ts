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
    gap: 5,
    flex: 1,
  }
});

export default style;
