//WRAPPERS
import { SettingsGroupWrapper } from '@shared/wrappers';
//FEATURES
import { ChangeVibrationSettingSwitcher } from '@features/counter';

const SystemSettingsWidget = () => {
	return (
		<SettingsGroupWrapper>
			<ChangeVibrationSettingSwitcher />
		</SettingsGroupWrapper>
	);
};

export default SystemSettingsWidget;
