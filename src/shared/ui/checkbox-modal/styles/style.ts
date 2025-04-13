import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: '#00000088',
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		width: '90%',
		maxHeight: '80%',
		backgroundColor: '#fff',
		borderRadius: 12,
		padding: 16
	},
	title: {
		fontSize: 18,
		marginBottom: 12,
		fontWeight: 'bold'
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 8
	},
	closeButton: {
		marginTop: 16,
		alignSelf: 'center',
		backgroundColor: '#2196F3',
		padding: 10,
		borderRadius: 8
	},
	closeButtonText: {
		color: '#fff',
		fontWeight: 'bold'
	}
});

export { style };
