//NATIVE
import { View } from 'react-native';
//FEATURES
import useDeleteCounter from '../../delete-group';
//UI
import { DeleteButtonWithConfirm, Paragraph } from '@shared/ui/';
//PROPS
import type { DeleteGroupButtonProps } from './model/delete-group-button.model';
//STYLES
import { style } from './styles/style';
//TEXT
import { GROUP_TEXT } from '@shared/text-content/text-content';

const DeleteGroupButton = ({ groupId }: DeleteGroupButtonProps) => {
	const deleteGroup = useDeleteCounter({ groupId });

	const onDeleteListener = () => {
		deleteGroup();
	};

	return (
		<View style={style.deleteGroupButton}>
			<Paragraph contentType={'primary'} size={'medium'}>
				{GROUP_TEXT.deleteGroupButtonLabel}
			</Paragraph>

			<DeleteButtonWithConfirm
				deleteAction={onDeleteListener}
				confirmText={{
					body: GROUP_TEXT.deleteGroupConfirmBody,
					title: GROUP_TEXT.deleteGroupConfirmTitle
				}}
				buttonText={GROUP_TEXT.deleteGroupButtonText}
			/>
		</View>
	);
};

export default DeleteGroupButton;
