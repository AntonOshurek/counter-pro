import { useState } from 'react';
//NATIVE
import { View } from 'react-native';
//FEATURES
import useCounterToGroupConnection from '../../counter-to-group-connection';
//MODEL
import { CounterGroupSelectModalProps } from './model/counter-group-select-modal.model';
//UI
import CheckboxModal from '../../../../../shared/ui/checkbox-modal/checkbox-modal';
import MainButton from '../../../../../shared/ui/main-button/main-button';
import { groupText } from '../../../../../shared/text-content/text-content';
//STYLES
import { style } from './styles/style';

const CounterGroupSelectModal = ({
	counter,
	groupToCounterConnection,
	groups
}: CounterGroupSelectModalProps) => {
	const [modalVisible, setModalVisible] = useState(false);
	const { deleteGroupFromCounter, addGroupToCounter } = useCounterToGroupConnection();
	const { addCounterToGroup, deleteCounterFromGroup } = groupToCounterConnection();

	const modalVisibleHandler = (visible: boolean) => {
		setModalVisible(visible);
	};

	const onGroupToggleListener = (groupId: string, newIsSelectedValue: boolean) => {
		if (newIsSelectedValue) {
			deleteGroupFromCounter(counter.id, counter.group);
			deleteCounterFromGroup(counter.id, counter.group);
			addGroupToCounter(counter.id, groupId);
			addCounterToGroup(counter.id, groupId);
		} else {
			deleteGroupFromCounter(counter.id, groupId);
			deleteCounterFromGroup(counter.id, groupId);
		}
	};

	return (
		<View style={style.groupCounterSelectModal}>
			<MainButton label={'List of Counters'} onPress={() => modalVisibleHandler(true)} />

			<CheckboxModal
				visible={modalVisible}
				onClose={() => modalVisibleHandler(false)}
				onToggle={onGroupToggleListener}
				items={groups}
				title={groupText.manageCountersModalTitle}
				itemsIsEmptyText={groupText.noAvailableCounter}
			/>
		</View>
	);
};

export default CounterGroupSelectModal;
