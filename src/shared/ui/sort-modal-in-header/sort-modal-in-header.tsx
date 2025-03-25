import { useState } from 'react';
//NATIVE
import { Modal, TouchableOpacity, View } from 'react-native';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import { SortModalInHeaderProps } from './model/sort-modal-in-header.model';
//UI
import { SortListIcon } from '../../icons';
import Paragraph from '../paragraph/paragraph';
//STYLES
import style from './styles/style';

const SortModalInHeader = <T extends string>({
	options,
	currentOption,
	onOptionListener
}: SortModalInHeaderProps<T>) => {
	const [modalVisible, setModalVisible] = useState(false);
	const theme = useThemeResolver();
	const s = style(theme);

	const toggleModal = () => setModalVisible(!modalVisible);

	const onOptionChange = (option: T) => {
		onOptionListener(option);
		toggleModal();
	};

	return (
		<View>
			<TouchableOpacity onPress={toggleModal}>
				<SortListIcon />
			</TouchableOpacity>

			<Modal visible={modalVisible} transparent animationType='fade'>
				<TouchableOpacity style={s.overlay} onPress={toggleModal} />

				<View style={s.menu}>
					{options.map(option => {
						const isSelected = option === currentOption;

						return (
							<TouchableOpacity
								style={[isSelected && s.selected, s.item]}
								onPress={() => onOptionChange(option)}
								key={option}
							>
								<Paragraph
									contentType={isSelected ? 'primary' : 'tertiary'}
									size={'large'}
								>
									{option}
								</Paragraph>
							</TouchableOpacity>
						);
					})}
				</View>
			</Modal>
		</View>
	);
};

export default SortModalInHeader;
