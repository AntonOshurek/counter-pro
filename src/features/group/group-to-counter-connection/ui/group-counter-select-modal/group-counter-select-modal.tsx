//NATIVE
import { TextInput, View } from 'react-native';
//FEATURES
import useGroupToCounterConnection from '../../group-to-counter-connection';
//MODEL
import { GroupCounterSelectModalProps } from './model/group-counter-select-modal.model';
//UI
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';
//STYLES
import { style } from './styles/style';

const GroupCounterSelectModal = ({ groupId }: GroupCounterSelectModalProps) => {
	const { deleteConnection, addConnection } = useGroupToCounterConnection({ groupId });

	return (
		<View style={style.groupCounterSelectModal}>
			<Paragraph contentType={'secondary'} size={'xSmall'}>
				Counters
			</Paragraph>

			<Paragraph contentType={'primary'} size={'medium'}>
				Manage Counters
			</Paragraph>
		</View>
	);
};

export default GroupCounterSelectModal;
