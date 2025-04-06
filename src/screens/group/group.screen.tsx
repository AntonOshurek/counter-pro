//NATIVE
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
//NAVIGATION
import { GroupScreenRouteProp } from '../../app/navigation/model';
//STORE
import { useAppSelector } from '../../shared/store';
//LAYOUTS
import { ScreenLayout } from '../layouts';
//WIDGETS
import { GroupCounterListWidget } from '../../widgets';
//ENTITIES
import { SelectorGetGroup } from '../../entities/group';
import { SelectorGetCounters } from '../../entities/counter';
//STYLES
import style from './styles/style';
//UI
import Paragraph from '../../shared/ui/paragraph/paragraph';

const GroupScreen = () => {
	const route = useRoute<GroupScreenRouteProp>();
	const { groupId } = route.params || {};
	const group = useAppSelector(SelectorGetGroup(groupId));
	const counters = useAppSelector(SelectorGetCounters());
  const groupCounters = group.counters.map(id => counters[id]);

	return (
		<ScreenLayout additionalClass={style.groupScreen}>
			<Text>some</Text>
			<GroupCounterListWidget groupCounters={groupCounters} />
		</ScreenLayout>
	);
};

export default GroupScreen;
