//NATIVE
import { Text } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//STYLES
import style from './styles/style';

const InfoScreen = (): JSX.Element => {
	return (
		<ScreenLayout additionalClass={style.infoScreen}>
			<Text>Info screen</Text>
		</ScreenLayout>
	);
};

export default InfoScreen;
