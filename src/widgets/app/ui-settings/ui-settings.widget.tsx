//FEATURES
import { ThemeSettingSwitcher } from '@features/app/';
//WRAPPERS
import { SettingsGroupWrapper } from '@shared/wrappers';

const UiSettingsWidget = () => {
	return (
		<SettingsGroupWrapper>
			<ThemeSettingSwitcher />
		</SettingsGroupWrapper>
	);
};

export default UiSettingsWidget;
