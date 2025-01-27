//NATIVE
import { View, Text } from 'react-native';
//STYLES
import style from './styles/style';
//LAYOUTS
import { ScreenLayout } from '../../layouts';

const GroupSettingsScreen = () => {
	return (
		<ScreenLayout additionalClass={style.groupSettingsScreen}>
			<View>
				<Text>Group settings screen</Text>
			</View>
		</ScreenLayout>
	);
};

export default GroupSettingsScreen;
