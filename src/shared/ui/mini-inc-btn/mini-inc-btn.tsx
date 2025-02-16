//NATIVE
import { Pressable, Text } from 'react-native';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import type { MiniIncBtnProps } from './mini-inc-btn.model';
//ICONS
import { PlusIcon } from '../../icons';
//STYLES
import { semanticStyle, colors } from '../../styles/';
import style from './style';

const MiniIncBtn = ({ incAction }: MiniIncBtnProps) => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<Pressable style={s.miniIncBtn} onPress={incAction}>
			<Text style={semanticStyle.visuallyHidden}>Increment</Text>
			<PlusIcon width={40} height={40} color={colors[theme].textPrimary} />
		</Pressable>
	);
};

export default MiniIncBtn;
