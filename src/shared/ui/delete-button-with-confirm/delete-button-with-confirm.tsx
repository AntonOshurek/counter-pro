//NATIVE
import { Alert, Pressable } from 'react-native';
//UI
import Paragraph from '../paragraph/paragraph';
//MODEL
import type { DeleteButtonWithConfirmProps } from './delete-button-with-confirm.model';
//STYLES
import style from './style';
import useThemeResolver from '../../hooks/useThemeResolver';

const DeleteButtonWithConfirm = ({ deleteAction }: DeleteButtonWithConfirmProps) => {
	const theme = useThemeResolver();
	const s = style(theme);

	const handleDelete = () => {
		Alert.alert('Delete Counter', 'Are You sure you want to delete this counter?', [
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
				delete counter button
			</Paragraph>
		</Pressable>
	);
};

export default DeleteButtonWithConfirm;
