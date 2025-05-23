import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	infoScreen: {
		justifyContent: 'space-between'
	},
	about: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	socialLinks: {
		width: '100%',
		height: 100,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
    gap: 10
	},
	link: {
		width: 50,
		height: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	releaseInfo: {
		alignItems: 'center'
	}
});

export default style;
