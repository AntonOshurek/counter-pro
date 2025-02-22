//NATIVE
import { View } from 'react-native';
//FEATURES
import useDeleteCounter from '../../delete-counter';
//UI
import DeleteButtonWithConfirm from '../../../../../shared/ui/delete-button-with-confirm/delete-button-with-confirm';
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';
//PROPS
import type { DeleteCounterButtonProps } from './delete-counter-button.model';
//STYLES
import { style } from './style';

const DeleteCounterButton = ({ counterId }: DeleteCounterButtonProps) => {
	const deleteCounter = useDeleteCounter({ counterId });

	const onDeleteListener = () => {
		deleteCounter();
	};

	return (
		<View style={style.deleteCounterButton}>
			<Paragraph contentType={'primary'} size={'medium'}>
				Delete Counter
			</Paragraph>

			<DeleteButtonWithConfirm
				deleteAction={onDeleteListener}
				confirmText={{
					body: 'Are You sure you want to delete this counter?',
					title: 'Delete Counter'
				}}
				buttonText={'Delete'}
			/>
		</View>
	);
};

export default DeleteCounterButton;
