//FEATURES
import useDeleteCounter from '../../delete-counter';
//UI
import DeleteButtonWithConfirm from '../../../../../shared/ui/delete-button-with-confirm/delete-button-with-confirm';
//PROPS
import type { DeleteCounterButtonProps } from './delete-counter-button.model';

const DeleteCounterButton = ({ counterId }: DeleteCounterButtonProps) => {
	const deleteCounter = useDeleteCounter({ counterId });

	const onDeleteListener = () => {
		deleteCounter();
	};

	return (
		<DeleteButtonWithConfirm
			deleteAction={onDeleteListener}
			confirmText={{
				body: 'Are You sure you want to delete this counter?',
				title: 'Delete Counter'
			}}
			buttonText={'Delete Counter'}
		/>
	);
};

export default DeleteCounterButton;
