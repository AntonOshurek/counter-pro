//NATIVE
import { Pressable, Text } from 'react-native';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import type { MiniDecBtnProps } from './mini-dec-btn.model';
//ICONS
import { MinusIcon } from '../../icons';
//STYLES
import { semanticStyle, colors } from '../../styles/';
import style from './style';

const MiniDecBtn = ({ incAction }: MiniDecBtnProps) => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<Pressable style={s.miniIncBtn} onPress={incAction}>
			<Text style={semanticStyle.visuallyHidden}>Decrement</Text>
			<MinusIcon width={40} height={40} color={colors[theme].textPrimary} />
		</Pressable>
	);
};

export default MiniDecBtn;
