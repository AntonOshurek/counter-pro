//WRAPPERS
import { SettingsGroupWrapper } from '@shared/wrappers';
//UI
import { Paragraph } from '@shared/ui';

const SystemSettingsWidget = () => {
	return (
		<SettingsGroupWrapper>
			<Paragraph contentType={'secondary'} size={'medium'} textTransform={'capitalize'}>
				System Settings
			</Paragraph>
		</SettingsGroupWrapper>
	);
};

export default SystemSettingsWidget;
