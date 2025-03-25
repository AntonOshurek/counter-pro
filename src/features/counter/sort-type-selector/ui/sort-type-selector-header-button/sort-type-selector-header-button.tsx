import { useState } from 'react';
//NATIVE
import { Modal, TouchableOpacity, View, Text } from 'react-native';
//STORE
import { useAppSelector } from '../../../../../shared/store';
//FEATURES
import useSortTypeSelector from '../../sotrt-type-selector';
//ENTITIES
import { SelectorGetListSortType } from '../../../../../entities/counter/store/selectors/counter-selectors';
//UI
import { SortListIcon } from '../../../../../shared/icons';
//VARIABLES
import { counterSortOptions, SortOptions } from '../../../../../shared/constants/sort';
//STYLES
import style from './styles/style';

const SortTypeSelectorHeaderButton = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const setListSortType = useSortTypeSelector();
	const sortType = useAppSelector(SelectorGetListSortType());

	const toggleModal = () => setModalVisible(!modalVisible);

	const onSortTypeChange = (sortOption: SortOptions) => {
		setListSortType(sortOption);
	};

	return (
		<View>
			<TouchableOpacity onPress={toggleModal}>
				<SortListIcon />
			</TouchableOpacity>

			<Modal visible={modalVisible} transparent animationType='fade'>
				<TouchableOpacity style={style.overlay} onPress={toggleModal} />

				<View style={style.menu}>
					{counterSortOptions.map((sortOption: SortOptions) => {
						return (
							<TouchableOpacity
								style={sortType === sortOption && style.selected}
								onPress={() => onSortTypeChange(sortOption)}
								key={sortOption}
							>
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
