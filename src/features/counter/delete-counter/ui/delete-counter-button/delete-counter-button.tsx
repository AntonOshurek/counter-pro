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

	return <DeleteButtonWithConfirm deleteAction={onDeleteListener} />;
};

export default DeleteCounterButton;
