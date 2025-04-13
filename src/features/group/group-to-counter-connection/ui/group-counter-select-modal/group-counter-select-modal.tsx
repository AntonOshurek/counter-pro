import { useState } from 'react';
//NATIVE
import { Button, View } from 'react-native';
//FEATURES
import useGroupToCounterConnection from '../../group-to-counter-connection';
//MODEL
import { GroupCounterSelectModalProps } from './model/group-counter-select-modal.model';
//UI
import CheckboxModal from '../../../../../shared/ui/checkbox-modal/checkbox-modal';
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

  const onCounterTooglerListener = (counterId: string) => {

  }

	return (
		<View style={style.groupCounterSelectModal}>
			<Button title='Group Counters List' onPress={() => modalVisibleHandler(true)} />

			<CheckboxModal
				visible={modalVisible}
				onClose={() => modalVisibleHandler(false)}
				onToggle={() => console.log('toggle')}
				items={counters}
			/>
		</View>
	);
};

export default GroupCounterSelectModal;
