//NATIVE
import { Text, View } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//UI
import Paragraph from '../../shaared/ui/paragraph/paragraph';
//STYLES
import style from './styles/style';

const InfoScreen = () => {
	return (
		<ScreenLayout additionalClass={style.infoScreen}>
			<View style={style.about}>
				<Paragraph size={'large'} contentType={'primary'}>This application created by AADev</Paragraph>
			</View>

			<View style={style.releaseInfo}>
				<Paragraph size={'small'} contentType={'secondary'}>App version - 0.0.1</Paragraph>
				<Paragraph size={'small'} contentType={'secondary'}>Release date - 27.01.2025</Paragraph>
			</View>
		</ScreenLayout>
	);
};

export default InfoScreen;
