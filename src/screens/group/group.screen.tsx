//NATIVE
import { View, Text } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//STYLES
import style from './styles/style';

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
