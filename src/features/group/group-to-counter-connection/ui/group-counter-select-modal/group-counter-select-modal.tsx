import { useState } from 'react';
//NATIVE
import { View } from 'react-native';
//FEATURES
import useGroupToCounterConnection from '../../group-to-counter-connection';
//MODEL
import type { GroupCounterSelectModalProps } from './model/group-counter-select-modal.model';
//UI
import { CheckboxModal, MainButton } from '@shared/ui/';
//TEXT
import { GROUP_TEXT } from '@shared/text-content/text-content';
//STYLES
import { style } from './styles/style';

const GroupCounterSelectModal = ({
	groupId,
	counterToGroupConnection,
	counters
}: GroupCounterSelectModalProps) => {
	const [modalVisible, setModalVisible] = useState(false);
	const { deleteCounterFromGroup, addCounterToGroup } = useGroupToCounterConnection();
	const { deleteGroupFromCounter, addGroupToCounter } = counterToGroupConnection();

	const modalVisibleHandler = (visible: boolean) => {
		setModalVisible(visible);
	};

	const onCounterToggleListener = (counterId: string, newIsSelectedValue: boolean) => {
		if (newIsSelectedValue) {
			addCounterToGroup(counterId, groupId);
			addGroupToCounter(counterId, groupId);
		} else {
			deleteGroupFromCounter(counterId, groupId);
			deleteCounterFromGroup(counterId, groupId);
		}
	};

	return (
		<View style={style.groupCounterSelectModal}>
			<MainButton label={'List of Counters'} onPress={() => modalVisibleHandler(true)} />

			<CheckboxModal
				visible={modalVisible}
				onClose={() => modalVisibleHandler(false)}
				onToggle={onCounterToggleListener}
				items={counters}
				title={GROUP_TEXT.manageCountersModalTitle}
				itemsIsEmptyText={GROUP_TEXT.noAvailableCounter}
			/>
		</View>
	);
};

export default GroupCounterSelectModal;
