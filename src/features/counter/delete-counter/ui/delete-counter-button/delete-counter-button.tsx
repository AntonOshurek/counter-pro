//NATIVE
import { View } from 'react-native';
//FEATURES
import useDeleteCounter from '../../delete-counter';
//UI
import { DeleteButtonWithConfirm, Paragraph } from '@shared/ui/';
//MODEL
import type { DeleteCounterButtonProps } from './model/delete-counter-button.model';
//STYLES
import { style } from './styles/style';
//TEXT
import { counterText } from '@shared/text-content/text-content';

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
