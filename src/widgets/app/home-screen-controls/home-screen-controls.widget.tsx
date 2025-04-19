//NATIVE
import { View } from 'react-native';
//FEATURES
import { CreateNewCounterButton } from '@features/counter';
//STYLES
import style from './style/style';

const HomeScreenControlsWidget = () => {
	return (
		<View style={style.homeScreenControlsWidget}>
			<CreateNewCounterButton />
		</View>
	);
};

export default HomeScreenControlsWidget;
