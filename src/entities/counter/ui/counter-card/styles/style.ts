import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	counterCard: {
		borderWidth: 2,
		borderColor: 'tomato',
    paddingInline: 10,
    paddingVertical: 10
	},
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  controls: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default style;
