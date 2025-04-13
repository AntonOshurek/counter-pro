//NATIVE
import { Pressable } from 'react-native';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//UI
import Paragraph from '../paragraph/paragraph';
//MODEL
import type { MainButtonProps } from './model/main-button.model';
//STYLES
import style from './style/style';

const MainButton = ({ onPress, label }: MainButtonProps) => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<Pressable style={s.mainButton} onPress={onPress}>
			<Paragraph size={'medium'} contentType={'primary'}>
				{label}
			</Paragraph>
		</Pressable>
	);
};

export default MainButton;
