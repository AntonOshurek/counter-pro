//NATIVE
import { View } from 'react-native';
//HOOKS
import useThemeResolver from '../../shaared/hooks/useThemeResolver';
//TYPES
import type { SettingsGroupLayoutProps } from './settings-group.model';
//STYLES
import style from './styles/style';

const SettingsGroupLayout = ({ children, additionalClass }: SettingsGroupLayoutProps) => {
	const theme = useThemeResolver();
	const s = style(theme);

	return <View style={[s.settingsGroupLayout, additionalClass]}>{children}</View>;
};

export default SettingsGroupLayout;
