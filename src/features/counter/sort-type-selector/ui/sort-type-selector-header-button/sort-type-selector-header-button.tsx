import { useState } from 'react';
//NATIVE
import { Modal, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
//UI
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';
//VARIABLES
import { counterSortOptions, SortOptions } from '../../../../../shared/constants/sort';

const SortTypeSelectorHeaderButton = () => {
	const [modalVisible, setModalVisible] = useState(false);

	const toggleModal = () => setModalVisible(!modalVisible);

	const onSortTypeChange = (sortOption: SortOptions) => {
    console.log(sortOption);
  };

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
					{counterSortOptions.map((sortOption: SortOptions) => {
						return (
							<TouchableOpacity onPress={() => onSortTypeChange(sortOption)} key={sortOption}>
								<Text style={styles.item}>{sortOption}</Text>
							</TouchableOpacity>
						);
					})}
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
