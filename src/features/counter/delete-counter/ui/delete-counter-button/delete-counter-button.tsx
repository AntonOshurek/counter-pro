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
//TEXT
import { counterText } from '../../../../../shared/text-content/text-content';

const DeleteCounterButton = ({ counterId }: DeleteCounterButtonProps) => {
	const deleteCounter = useDeleteCounter({ counterId });

	const onDeleteListener = () => {
		deleteCounter();
	};

	return (
		<View style={style.deleteCounterButton}>
			<Paragraph contentType={'primary'} size={'medium'}>
				{counterText.deleteCounterButtonLabel}
			</Paragraph>

			<DeleteButtonWithConfirm
				deleteAction={onDeleteListener}
				confirmText={{
					body: counterText.deleteCounterConfirmBody,
					title: counterText.deleteCounterConfirmTitle
				}}
				buttonText={counterText.deleteCounterButtonText}
			/>
		</View>
	);
};

export default DeleteCounterButton;
