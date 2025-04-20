import { useState } from 'react';
//NATIVE
import { View } from 'react-native';
//FEATURES
import useCounterToGroupConnection from '../../counter-to-group-connection';
//MODEL
import type { CounterGroupSelectModalProps } from './model/counter-group-select-modal.model';
//UI
import { CheckboxModal, MainButton, Paragraph } from '@shared/ui/';
//TEXT CONTENT
import { COUNTER_TEXT } from '@shared/text-content/text-content';
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

	const counterGroup = groups.find(g => g.id === counter.group);

	const modalVisibleHandler = (visible: boolean) => {
		setModalVisible(visible);
	};

	const onGroupToggleListener = (groupId: string, newIsSelectedValue: boolean) => {
		if (newIsSelectedValue) {
			if (counter.group) {
				deleteGroupFromCounter(counter.id, counter.group);
				deleteCounterFromGroup(counter.id, counter.group);
			}
			addGroupToCounter(counter.id, groupId);
			addCounterToGroup(counter.id, groupId);
		} else {
			deleteGroupFromCounter(counter.id, groupId);
			deleteCounterFromGroup(counter.id, groupId);
		}
	};

	return (
		<View style={style.counterGroupSelectModal}>
			{counterGroup && (
				<View style={style.connectedGroup}>
					<Paragraph contentType={'secondary'} size={'medium'}>
						Connected with group:
					</Paragraph>
					<Paragraph contentType={'primary'} size={'medium'}>
						{counterGroup.label}
					</Paragraph>
				</View>
			)}

			<MainButton
				label={counterGroup ? 'Change Group' : 'Add to Group'}
				onPress={() => modalVisibleHandler(true)}
			/>

			<CheckboxModal
				visible={modalVisible}
				onClose={() => modalVisibleHandler(false)}
				onToggle={onGroupToggleListener}
				items={groups}
				title={COUNTER_TEXT.manageGroupsModalTitle}
				itemsIsEmptyText={COUNTER_TEXT.noAvailableGroups}
			/>
		</View>
	);
};

export default CounterGroupSelectModal;
