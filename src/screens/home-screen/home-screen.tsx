//NATIVE
import { View, Text } from 'react-native';
//STYLES
import style from './styles/style';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//WIDGETS
import { CreateCounterWidget } from '../../widgest';

const HomeScreen = () => {
	return (
		<ScreenLayout additionalClass={style.homeScreen}>
			<View>
				<Text>List of last counters</Text>
			</View>

			<CreateCounterWidget />
		</ScreenLayout>
	);
};

export default HomeScreen;
