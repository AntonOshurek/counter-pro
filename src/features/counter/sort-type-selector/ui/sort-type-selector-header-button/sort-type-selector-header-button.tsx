import Paragraph from '../../../../../shared/ui/paragraph/paragraph';
import { Modal, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

const SortTypeSelectorHeaderButton = () => {
	const [modalVisible, setModalVisible] = useState(false);

	const toggleModal = () => setModalVisible(!modalVisible);

	return (
		<View>
			<TouchableOpacity onPress={toggleModal}>
				<Paragraph contentType={'primary'} size={'small'}>
					Sort ▼
				</Paragraph>
			</TouchableOpacity>

			<Modal visible={modalVisible} transparent animationType='fade'>
				<TouchableOpacity style={styles.overlay} onPress={toggleModal} />
				<View style={styles.menu}>
					<TouchableOpacity onPress={() => console.log('Sort by name')}>
						<Text style={styles.item}>Sort by Name</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => console.log('Sort by date')}>
						<Text style={styles.item}>Sort by Date</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => console.log('Sort by count')}>
						<Text style={styles.item}>Sort by Count</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	menu: {
		position: 'absolute',
		top: 50,
		right: 10,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 5,
		elevation: 5
	},
	item: {
		padding: 10,
		fontSize: 16
	}
});

export default SortTypeSelectorHeaderButton;
