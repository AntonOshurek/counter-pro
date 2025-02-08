//LAYOUTS
import { ScreenLayout } from '../../layouts';
//WIDGETS
import { GroupsScreenControlsWidget, GroupsList } from '../../widgets';
//STYLES
import style from './styles/style';


const GroupsScreen = () => {
	return (
		<ScreenLayout additionalClass={style.groupsScreen}>
      <GroupsList />

			<GroupsScreenControlsWidget />
		</ScreenLayout>
	);
};

export default GroupsScreen;
