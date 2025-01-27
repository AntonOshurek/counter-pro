//NATIVE
import { View, Text } from 'react-native';
//STYLES
import style from './styles/style';
//LAYOUTS
import { ScreenLayout } from '../../layouts';

const GroupScreen = () => {
	return (
		<ScreenLayout additionalClass={style.groupScreen}>
			<View>
				<Text>Group item screen</Text>
			</View>
		</ScreenLayout>
	);
};

export default GroupScreen;
