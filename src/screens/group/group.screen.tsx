//NATIVE
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
//NAVIGATION
import { GroupScreenRouteProp } from '../../app/navigation/model';
//LAYOUTS
import { ScreenLayout } from '../layouts';
//STYLES
import style from './styles/style';
//UI
import Paragraph from '../../shared/ui/paragraph/paragraph';

const GroupScreen = () => {
	const route = useRoute<GroupScreenRouteProp>();
	const { group } = route.params || {};

	return (
		<ScreenLayout additionalClass={style.groupScreen}>
			<View>
				<Paragraph size={'large'} contentType={'primary'}>
					Group item screen {group?.name}
				</Paragraph>
			</View>
		</ScreenLayout>
	);
};

export default GroupScreen;
