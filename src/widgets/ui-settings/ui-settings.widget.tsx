//FEATURES
// import { ThemeSwitcher } from '../../features';
import { ThemeSwitcherFeature } from '../../features/theme/switch-theme';
//WRAPPERS
import { SettingsGroupWrapper } from '../../shared/wrappers';

const UiSettingsWidget = () => {
	return (
		<SettingsGroupWrapper>
			<ThemeSwitcherFeature />
		</SettingsGroupWrapper>
	);
};

export default UiSettingsWidget;
