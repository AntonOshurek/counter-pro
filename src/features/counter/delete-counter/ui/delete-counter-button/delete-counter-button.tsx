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
import { COUNTER_TEXT } from '@shared/text-content/text-content';

const DeleteCounterButton = ({ counterId }: DeleteCounterButtonProps) => {
	const deleteCounter = useDeleteCounter({ counterId });

	const onDeleteListener = () => {
		deleteCounter();
	};

	return (
		<View style={style.deleteCounterButton}>
			<Paragraph contentType={'primary'} size={'medium'}>
				{COUNTER_TEXT.deleteCounterButtonLabel}
			</Paragraph>

			<DeleteButtonWithConfirm
				deleteAction={onDeleteListener}
				confirmText={{
					body: COUNTER_TEXT.deleteCounterConfirmBody,
					title: COUNTER_TEXT.deleteCounterConfirmTitle
				}}
				buttonText={COUNTER_TEXT.deleteCounterButtonText}
			/>
		</View>
	);
};

export default DeleteCounterButton;
