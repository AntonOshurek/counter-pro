//FEATURES
import { ThemeSwitcher } from '../../features';
//WRAPPERS
import { SettingsGroupWrapper } from '../../shaared/wrappers';

const UiSettingsWidget = () => {
	return (
		<SettingsGroupWrapper>
			<ThemeSwitcher />
		</SettingsGroupWrapper>
	);
};

export default UiSettingsWidget;
