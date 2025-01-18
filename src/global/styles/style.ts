import { StyleSheet } from 'react-native';

const globalStyle = StyleSheet.create({
	visuallyHidden: {
		position: 'absolute',
		top: -9999,
		left: -9999,
		width: 1,
		height: 1,
		opacity: 0
	}
});

export { globalStyle };
