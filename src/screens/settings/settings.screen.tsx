//LAYOUTS
import { ScreenLayout } from '../layouts';
//WIDGETS
import { UiSettingsWidget, SystemSettingsWidget } from '@widgets/app';
//STYLES
import style from './styles/style';

const SettingsScreen = () => {
	return (
		<ScreenLayout additionalClass={style.settingsScreen}>
			<SystemSettingsWidget></SystemSettingsWidget>
			<UiSettingsWidget />
		</ScreenLayout>
	);
};

export default SettingsScreen;
