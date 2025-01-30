//NATIVE
import { Text, View } from 'react-native';
//ENTITIES
import Count from '../../entities/count/count.entitiy';
//STYLES
// import style from './styles/style';

const NewCounterWidget = (): JSX.Element => {
	return (
		<>
			<View>
				<Text>header with settings for counter and info</Text>
			</View>

			<View>
				<Count count={0} />
			</View>

			<View>
				<Text>counter controls</Text>
			</View>
		</>
	);
};

export default NewCounterWidget;
