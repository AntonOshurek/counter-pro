//NATIVE
import { Pressable, Text } from 'react-native';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import type { CreateButtonProps } from './model/create-button.model';
//ICONS
import { PlusIcon } from '../../icons';
//STYLES
import { semanticStyle, colors } from '../../styles/';
import style from './style/style';

const CreateButton = ({ onPress, hiddenText }: CreateButtonProps) => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<Pressable style={s.createButton} onPress={onPress}>
			<Text style={semanticStyle.visuallyHidden}>{hiddenText}</Text>
			<PlusIcon width={40} height={40} color={colors[theme].textPrimary} />
		</Pressable>
	);
};

export default CreateButton;
