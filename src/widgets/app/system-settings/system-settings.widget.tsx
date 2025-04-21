//WRAPPERS
import { SettingsGroupWrapper } from '@shared/wrappers';
//FEATURES
import { ChangeVibrationSettingSwitcher } from '@features/counter';
//UI
import { Paragraph } from '@shared/ui';

const SystemSettingsWidget = () => {
	return (
		<SettingsGroupWrapper>
			<Paragraph contentType={'secondary'} size={'medium'} textTransform={'capitalize'}>
				System Settings
			</Paragraph>
			<ChangeVibrationSettingSwitcher />
		</SettingsGroupWrapper>
	);
};

export default SystemSettingsWidget;
