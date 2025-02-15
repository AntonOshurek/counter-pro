//LAYOUTS
import { ScreenLayout } from '../layouts';
//WIDGETS
import { GroupsScreenControlsWidget, GroupsWidget } from '../../widgets';
//STYLES
import style from './styles/style';

const GroupsScreen = () => {
	return (
		<ScreenLayout additionalClass={style.groupsScreen} withoutPaddings={true}>
			<GroupsWidget />
			<GroupsScreenControlsWidget />
		</ScreenLayout>
	);
};

export default GroupsScreen;
