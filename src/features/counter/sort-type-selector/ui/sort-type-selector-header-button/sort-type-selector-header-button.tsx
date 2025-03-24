import { useState } from 'react';
//NATIVE
import { Modal, TouchableOpacity, View, Text } from 'react-native';
//UI
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';
import { SortListIcon } from '../../../../../shared/icons';
//VARIABLES
import { counterSortOptions, SortOptions } from '../../../../../shared/constants/sort';
//STYLES
import style from './styles/style';

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
					<SortListIcon />
				</Paragraph>
			</TouchableOpacity>

			<Modal visible={modalVisible} transparent animationType='fade'>
				<TouchableOpacity style={style.overlay} onPress={toggleModal} />

				<View style={style.menu}>
					{counterSortOptions.map((sortOption: SortOptions) => {
						return (
							<TouchableOpacity onPress={() => onSortTypeChange(sortOption)} key={sortOption}>
								<Text style={style.item}>{sortOption}</Text>
							</TouchableOpacity>
						);
					})}
				</View>
			</Modal>
		</View>
	);
};

export default SortTypeSelectorHeaderButton;
