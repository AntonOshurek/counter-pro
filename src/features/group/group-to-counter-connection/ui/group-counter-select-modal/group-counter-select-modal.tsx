import { useState } from 'react';
//NATIVE
import { Button, View } from 'react-native';
//FEATURES
import useGroupToCounterConnection from '../../group-to-counter-connection';
//MODEL
import { GroupCounterSelectModalProps } from './model/group-counter-select-modal.model';
//UI
import CheckboxModal from '../../../../../shared/ui/checkbox-modal/checkbox-modal';
import MainButton from '../../../../../shared/ui/main-button/main-button';
//STYLES
import { style } from './styles/style';

const GroupCounterSelectModal = ({
	groupId,
	useCounterConnection,
	counters
}: GroupCounterSelectModalProps) => {
	const [modalVisible, setModalVisible] = useState(false);
	const { deleteConnection, addConnection } = useGroupToCounterConnection({ groupId });

	const modalVisibleHandler = (visible: boolean) => {
		setModalVisible(visible);
	};

	const onCounterToggleListener = (counterId: string, newIsSelectedValue: boolean) => {
		// const {} = useCounterConnection(counterId);

		if (newIsSelectedValue) {
			addConnection(counterId);
		} else deleteConnection(counterId);
	};

	return (
		<View style={style.groupCounterSelectModal}>
			<MainButton label={'List of Counters'} onPress={() => modalVisibleHandler(true)} />

			<CheckboxModal
				visible={modalVisible}
				onClose={() => modalVisibleHandler(false)}
				onToggle={onCounterToggleListener}
				items={counters}
				title={'Manage Counters'}
			/>
		</View>
	);
};

export default GroupCounterSelectModal;
