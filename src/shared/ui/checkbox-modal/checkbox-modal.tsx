import React from 'react';
//NATIVE
import { Modal, View, Text, FlatList, TouchableOpacity } from 'react-native';
//LIBS
import Checkbox from '@react-native-community/checkbox';
//MODEL
import type { CheckboxModalProps } from './model/checlbox-modal.model';
//STYLES
import { style } from './styles/style';
import CustomCheckbox from '../../checkbox/checkbox';

const CheckboxModal = ({
	visible,
	title = 'Choose Counters',
	items,
	onToggle,
	onClose
}: CheckboxModalProps) => {
	return (
		<Modal visible={visible} transparent animationType='slide'>
			<View style={style.overlay}>
				<View style={style.container}>
					<Text style={style.title}>{title}</Text>

					<FlatList
						data={items}
						keyExtractor={item => item.id}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity style={style.item} onPress={() => onToggle(item.id)}>
									<CustomCheckbox
										value={item.isSelected}
										onChange={() => onToggle(item.id)}
									/>
									<Text>{item.label}</Text>
								</TouchableOpacity>
							);
						}}
					/>

					<TouchableOpacity onPress={onClose} style={style.closeButton}>
						<Text style={style.closeButtonText}>Закрыть</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

export default CheckboxModal;
