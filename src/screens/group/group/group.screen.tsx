//NATIVE
import { useRoute } from '@react-navigation/native';
//NAVIGATION
import { GroupScreenRouteProp } from '@shared/types/navigation';
//LAYOUTS
import { ScreenLayout } from '@shared/layouts/';
//WIDGETS
import { GroupCounterListWidget, GroupScreenControlsWidget } from '@widgets/group';
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
