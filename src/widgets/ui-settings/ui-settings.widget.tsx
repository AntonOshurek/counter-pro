//FEATURES
import ThemeSwitcher from '../../features/theme/switch-theme';
//WRAPPERS
import { SettingsGroupWrapper } from '../../shared/wrappers';

const UiSettingsWidget = () => {
	return (
		<SettingsGroupWrapper>
			<ThemeSwitcher />
		</SettingsGroupWrapper>
	);
};

export default UiSettingsWidget;
