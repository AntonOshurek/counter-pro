import React from 'react';
//NATIVE
import { Modal, View, FlatList, TouchableOpacity } from 'react-native';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//UI
import CustomCheckbox from '@shared/ui/custom-checkbox/custom-checkbox';
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
	onClose,
	itemsIsEmptyText
}: CheckboxModalProps) => {
	const theme = useThemeResolver();
	const s = style(theme);

	const checkboxToggle = (item: checkboxModalItems) => {
		onToggle(item.id, !item.isSelected);
	};

	return (
		<Modal visible={visible} transparent animationType='slide'>
			<View style={s.container}>
				<Paragraph size={'large'} contentType={'primary'}>
					{title}
				</Paragraph>

				{items.length > 0 ? (
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
				) : (
					<Paragraph contentType={'tertiary'} size={'small'}>
						{itemsIsEmptyText}
					</Paragraph>
				)}

				<MainButton onPress={onClose} label={'Close modal'} />
			</View>

			<TouchableOpacity style={s.overlay} onPress={onClose}></TouchableOpacity>
		</Modal>
	);
};

export default CheckboxModal;
