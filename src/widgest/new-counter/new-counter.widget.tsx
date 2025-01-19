//NATIVE
import { Text, View } from 'react-native';
//STYLES
import style from './styles/style';

const NewCounterWidget = (): JSX.Element => {
	return (
		<View style={style.newCounterWidget}>
			<View>
				<Text>header with settings for counter and info</Text>
			</View>

			<View>
				<Text>counter</Text>
			</View>

			<View>
				<Text>counter controls</Text>
			</View>
		</View>
	);
};

export default NewCounterWidget;
