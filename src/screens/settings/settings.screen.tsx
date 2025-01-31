//NATIVE
import { View, Text } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//WIDGETS
import UiSettingsWidget from '../../widgets/ui-settings/ui-settings.widget';
//STYLES
import style from './styles/style';

const SettingsScreen = (): JSX.Element => {
	return (
		<ScreenLayout additionalClass={style.settingsScreen}>
			<Text>settings screen 1</Text>
			<Text>settings screen 2</Text>
      <UiSettingsWidget />
		</ScreenLayout>
	);
};

export default SettingsScreen;
