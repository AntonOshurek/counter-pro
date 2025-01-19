//NATIVE
import { Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
//ENTITIES
import { Count } from '../../entities';
//STYLES
import style from './styles/style';

const NewCounterWidget = (): JSX.Element => {
	return (
		<View style={style.newCounterWidget}>
			<View>
				<Text>header with settings for counter and info</Text>
			</View>

			<View>
				<Count count={0} />
			</View>

			<View>
				<Text>counter controls</Text>
			</View>
		</View>
	);
};

export default NewCounterWidget;
