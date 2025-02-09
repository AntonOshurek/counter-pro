//WRAPPERS
import { SettingsGroupWrapper } from '../../shaared/wrappers';
//UI
import Paragraph from '../../shaared/ui/paragraph/paragraph';

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
