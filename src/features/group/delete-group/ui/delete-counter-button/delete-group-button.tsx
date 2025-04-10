//NATIVE
import { View } from 'react-native';
//FEATURES
import useDeleteCounter from '../../delete-group';
//UI
import DeleteButtonWithConfirm from '../../../../../shared/ui/delete-button-with-confirm/delete-button-with-confirm';
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';
//PROPS
import type { DeleteGroupButtonProps } from './delete-group-button.model';
//STYLES
import { style } from './style';
//TEXT
import { groupText } from '../../../../../shared/text-content/text-content';

const DeleteGroupButton = ({ groupId }: DeleteGroupButtonProps) => {
	const deleteGroup = useDeleteCounter({ groupId });

	const onDeleteListener = () => {
		deleteGroup();
	};

	return (
		<View style={style.deleteGroupButton}>
			<Paragraph contentType={'primary'} size={'medium'}>
				{groupText.deleteGroupButtonLabel}
			</Paragraph>

			<DeleteButtonWithConfirm
				deleteAction={onDeleteListener}
				confirmText={{
					body: groupText.deleteGroupConfirmBody,
					title: groupText.deleteGroupConfirmTitle
				}}
				buttonText={groupText.deleteGroupButtonText}
			/>
		</View>
	);
};

export default DeleteGroupButton;
