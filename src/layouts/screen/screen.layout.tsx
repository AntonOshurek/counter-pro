//NATIVE
import { View } from 'react-native';
//HOOKS
import useThemeResolver from '../../shaared/hooks/useThemeResolver';
//TYPES
import type { ScreenLayoutProps } from './model/screen-layout.model';
//STYLES
import style from './styles/style';

const ScreenLayout = ({ children, additionalClass }: ScreenLayoutProps) => {
	const theme = useThemeResolver();
	const s = style(theme);

	return <View style={[s.ScreenLayout, additionalClass]}>{children}</View>;
};

export default ScreenLayout;
