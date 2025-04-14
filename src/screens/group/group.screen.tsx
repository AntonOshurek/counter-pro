//NATIVE
import { useRoute } from '@react-navigation/native';
//NAVIGATION
import { GroupScreenRouteProp } from '../../app/navigation/model';
//LAYOUTS
import { ScreenLayout } from '../layouts';
//WIDGETS
import { GroupCounterListWidget, GroupScreenControlsWidget } from '../../widgets';
//STYLES
import style from './styles/style';

const GroupScreen = () => {
	const route = useRoute<GroupScreenRouteProp>();
	const { groupId } = route.params || {};

	return (
		<ScreenLayout additionalClass={style.groupScreen}>
			<GroupCounterListWidget groupId={groupId} />
			<GroupScreenControlsWidget groupId={groupId} />
		</ScreenLayout>
	);
};

export default GroupScreen;
