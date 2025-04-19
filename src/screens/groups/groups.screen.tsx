//LAYOUTS
import { ScreenLayout } from '../layouts';
//WIDGETS
import { GroupsScreenControlsWidget, GroupListWidget } from '@widgets/group';
//STYLES
import style from './styles/style';

const GroupsScreen = () => {
	return (
		<ScreenLayout additionalClass={style.groupsScreen} withoutPaddings={true}>
			<GroupListWidget />
			<GroupsScreenControlsWidget />
		</ScreenLayout>
	);
};

export default GroupsScreen;
