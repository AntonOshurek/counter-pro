//NATIVE
import { Pressable } from 'react-native';
//FEATURES
import useDeleteCounter from '../../delete-counter';
//PROPS
import type { DeleteCounterButtonProps } from './delete-counter-button.model';
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';

const DeleteCounterButton = ({ counterId }: DeleteCounterButtonProps) => {
	const deleteCounter = useDeleteCounter({ counterId });

	return (
		<Pressable onPress={() => deleteCounter()}>
			<Paragraph contentType={'primary'} size={'medium'}>
				delete counter button
			</Paragraph>
		</Pressable>
	);
};

export default DeleteCounterButton;
