//NATIVE
import { View, Text } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//STYLES
import style from './styles/style';

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
