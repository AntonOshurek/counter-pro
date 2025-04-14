import { useState } from 'react';
//FEATURES
import useGroupToCounterConnection from '../../group-to-counter-connection';
//UI
import CreateButton from '../../../../../shared/ui/create-button/create-button';
import CheckboxModal from '../../../../../shared/ui/checkbox-modal/checkbox-modal';
import { groupText } from '../../../../../shared/text-content/text-content';
//MODEL
import type { OpenGroupToCounterModalButtonProps } from './model/open-group-to-counter-modal-button.model';

const OpenGroupToCounterModalButton = ({
	counterToGroupConnection,
	groupId,
	counters
}: OpenGroupToCounterModalButtonProps) => {
	const [modalVisible, setModalVisible] = useState(false);
	const { deleteCounterFromGroup, addCounterToGroup } = useGroupToCounterConnection();
	const { deleteGroupFromCounter, addGroupToCounter } = counterToGroupConnection();

	const modalVisibleHandler = () => {
		setModalVisible(true);
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
		<>
			<CreateButton onPress={modalVisibleHandler} hiddenText='Add counter to group' />
			<CheckboxModal
				visible={modalVisible}
				onClose={() => setModalVisible(false)}
				onToggle={onCounterToggleListener}
				items={counters}
				title={groupText.manageCountersModalTitle}
				itemsIsEmptyText={groupText.noAvailableCounter}
			/>
		</>
	);
};

export default OpenGroupToCounterModalButton;
