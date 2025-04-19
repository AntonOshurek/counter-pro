//NATIVE
import { Alert, Pressable } from 'react-native';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//UI
import Paragraph from '../paragraph/paragraph';
//MODEL
import type { DeleteButtonWithConfirmProps } from './model/delete-button-with-confirm.model';
//STYLES
import style from './styles/style';

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
			<Paragraph contentType={'alwaysWhite'} size={'medium'}>
				{buttonText}
			</Paragraph>
		</Pressable>
	);
};

export default DeleteButtonWithConfirm;
