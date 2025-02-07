//LAYOUTS
import { ScreenLayout } from '../../layouts';
//WIDGETS
import { UiSettingsWidget, SystemSettingsWidget } from '../../widgets/';
//STYLES
import style from './styles/style';

const SettingsScreen = (): JSX.Element => {
	return (
		<ScreenLayout additionalClass={style.settingsScreen}>
			<SystemSettingsWidget></SystemSettingsWidget>
			<UiSettingsWidget />
		</ScreenLayout>
	);
};

export default SettingsScreen;
