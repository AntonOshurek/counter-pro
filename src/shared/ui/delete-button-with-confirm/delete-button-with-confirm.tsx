//NATIVE
import { Alert, Pressable } from 'react-native';
//UI
import Paragraph from '../paragraph/paragraph';
//MODEL
import type { DeleteButtonWithConfirmProps } from './delete-button-with-confirm.model';
//STYLES
import style from './style';
import useThemeResolver from '../../hooks/useThemeResolver';

const DeleteButtonWithConfirm = ({
	deleteAction,
	confirmText,
	buttonText
}: DeleteButtonWithConfirmProps) => {
	const theme = useThemeResolver();
	const s = style(theme);

	const handleDelete = () => {
		Alert.alert(confirmText.title, confirmText.body, [
			{
				text: 'Cancel',
				style: 'cancel'
			},
			{
				text: 'Delete',
				style: 'destructive',
				onPress: () => deleteAction()
			}
		]);
	};

	return (
		<Pressable style={s.deleteButtonWithConfirm} onPress={handleDelete}>
			<Paragraph contentType={'primary'} size={'medium'}>
				{buttonText}
			</Paragraph>
		</Pressable>
	);
};

export default DeleteButtonWithConfirm;
