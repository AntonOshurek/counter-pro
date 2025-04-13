import React from 'react';
//NATIVE
import { Modal, View, Text, FlatList, TouchableOpacity } from 'react-native';
//UI
import CustomCheckbox from '../../checkbox/checkbox';
import MainButton from '../main-button/main-button';
//MODEL
import type { CheckboxModalProps } from './model/checlbox-modal.model';
//STYLES
import { style } from './styles/style';

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
								<TouchableOpacity
									style={style.item}
									onPress={() => onToggle(item.id, !item.isSelected)}
								>
									<CustomCheckbox
										value={item.isSelected}
										onChange={() => onToggle(item.id, !item.isSelected)}
									/>
									<Text>{item.label}</Text>
								</TouchableOpacity>
							);
						}}
					/>

					<TouchableOpacity onPress={onClose} style={style.closeButton}>
						<Text style={style.closeButtonText}>Close</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

export default CheckboxModal;
