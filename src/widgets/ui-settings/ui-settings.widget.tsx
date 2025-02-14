//FEATURES
import { ThemeSwitcher } from '../../features';
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
