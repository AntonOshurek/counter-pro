//NATIVE
import { View, Text } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//STYLES
import style from './styles/style';

const SettingsScreen = (): JSX.Element => {
	return (
		<ScreenLayout additionalClass={style.settingsScreen}>
			<Text>settings screen 1</Text>
			<Text>settings screen 2</Text>
			<Text>settings screen 3</Text>
		</ScreenLayout>
	);
};

export default SettingsScreen;
