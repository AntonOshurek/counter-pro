//NATIVE
import { Text, View } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//STYLES
import style from './styles/style';

const InfoScreen = (): JSX.Element => {
	return (
		<ScreenLayout additionalClass={style.infoScreen}>
			<View style={style.about}>
				<Text>This application created by AADev</Text>
			</View>

			<View style={style.releaseInfo}>
				<Text>App version - 0.0.1</Text>
				<Text>Release date - 27.01.2025</Text>
			</View>
		</ScreenLayout>
	);
};

export default InfoScreen;
