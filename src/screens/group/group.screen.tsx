//NATIVE
import { useRoute } from '@react-navigation/native';
//NAVIGATION
import { GroupScreenRouteProp } from '../../app/navigation/model';
//STORE
import { useAppSelector } from '../../shared/store';
//LAYOUTS
import { ScreenLayout } from '../layouts';
//WIDGETS
import { GroupCounterListWidget, GroupScreenControlsWidget } from '../../widgets';
//ENTITIES
import { SelectorGetGroup } from '../../entities/group';
import { SelectorGetCounters } from '../../entities/counter';
//STYLES
import style from './styles/style';

const GroupScreen = () => {
	const route = useRoute<GroupScreenRouteProp>();
	const { groupId } = route.params || {};
	const group = useAppSelector(SelectorGetGroup(groupId));
	const counters = useAppSelector(SelectorGetCounters());
	const groupCounters = group.counters.map(id => counters[id]);

	return (
		<ScreenLayout additionalClass={style.groupScreen}>
			<GroupCounterListWidget groupCounters={groupCounters} />
			<GroupScreenControlsWidget group={group} />
		</ScreenLayout>
	);
};

export default GroupScreen;
