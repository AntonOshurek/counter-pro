//NATIVE
import { View } from 'react-native';
//FEATURES
import { CreateNewCounter } from '../../features';
//STYLES
import style from './style/style';

const HomeScreenControlsWidget = () => {
	return (
		<View style={style.homeScreenControlsWidget}>
			<CreateNewCounter />
		</View>
	);
};

export default HomeScreenControlsWidget;
