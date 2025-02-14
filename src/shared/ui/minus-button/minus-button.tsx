//NATIVE
import { Pressable, Text } from 'react-native';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import type { MinusButtonProps } from './model/create-button.model';
//ICONS
import { MinusIcon } from '../../icons';
//STYLES
import { semanticStyle, colors } from '../../styles/';
import style from './style/style';

const MinusButton = ({ onPress, hiddenText }: MinusButtonProps) => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<Pressable style={s.minusButton} onPress={onPress}>
			<Text style={semanticStyle.visuallyHidden}>{hiddenText}</Text>
			<MinusIcon width={40} height={40} color={colors[theme].textPrimary} />
		</Pressable>
	);
};

export default MinusButton;
