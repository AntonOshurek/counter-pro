import React from 'react';
//NATIVE
import { Modal, View, Text, FlatList, TouchableOpacity } from 'react-native';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//UI
import CustomCheckbox from '../../checkbox/checkbox';
import MainButton from '../main-button/main-button';
import Paragraph from '../paragraph/paragraph';
//MODEL
import { checkboxModalItems, CheckboxModalProps } from './model/checlbox-modal.model';
//STYLES
import { style } from './styles/style';

const CheckboxModal = ({
	visible,
	title,
	items,
	onToggle,
	onClose
}: CheckboxModalProps) => {
	const theme = useThemeResolver();
	const s = style(theme);

	const checkboxToggle = (item: checkboxModalItems) => {
		onToggle(item.id, !item.isSelected);
	};

	return (
		<Modal visible={visible} transparent animationType='slide'>
			<TouchableOpacity style={s.overlay} onPress={onClose}>
				<View style={s.container}>
					<Paragraph size={'large'} contentType={'primary'}>
						{title}
					</Paragraph>

					<FlatList
						data={items}
						keyExtractor={item => item.id}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity style={s.item} onPress={() => checkboxToggle(item)}>
									<CustomCheckbox
										value={item.isSelected}
										onChange={() => checkboxToggle(item)}
									/>
									<Paragraph size={'medium'} contentType={'primary'}>
										{item.label}
									</Paragraph>
								</TouchableOpacity>
							);
						}}
					/>

					<MainButton onPress={onClose} label={'Close'} />
				</View>
			</TouchableOpacity>
		</Modal>
	);
};

export default CheckboxModal;
