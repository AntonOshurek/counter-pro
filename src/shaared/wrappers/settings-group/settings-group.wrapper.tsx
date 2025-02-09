//NATIVE
import { View } from 'react-native';
//HOOKS
import useThemeResolver from '../../hooks/useThemeResolver';
//MODEL
import { SettingsGroupWrapperProps } from './model/settings-group.model';
//STYLES
import style from './styles/style';

const SettingsGroupLayout = ({
	children,
	additionalClass
}: SettingsGroupWrapperProps) => {
	const theme = useThemeResolver();
	const s = style(theme);

	return <View style={[s.settingsGroupWrapper, additionalClass]}>{children}</View>;
};

export default SettingsGroupLayout;
