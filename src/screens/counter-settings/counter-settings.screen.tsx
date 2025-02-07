//NATIVE
import { View, Text } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//STYLES
import style from './styles/style';

const CounterSettingsScreen = () => {
	return (
		<ScreenLayout additionalClass={style.counterSettingsScreen}>
			<View>
				<Text>Counter Settings Screen</Text>
			</View>
		</ScreenLayout>
	);
};

export default CounterSettingsScreen;
