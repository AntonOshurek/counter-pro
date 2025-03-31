//NATIVE
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
//NAVIGATION
import { GroupScreenRouteProp } from '../../app/navigation/model';
//STORE
import { useAppSelector } from '../../shared/store';
//LAYOUTS
import { ScreenLayout } from '../layouts';
//ENTITIES
import { SelectorGetGroup } from '../../entities/group';
import { SelectorGetCountersByIds } from '../../entities/counter';
//STYLES
import style from './styles/style';
//UI
import Paragraph from '../../shared/ui/paragraph/paragraph';

const GroupScreen = () => {
	const route = useRoute<GroupScreenRouteProp>();
	const { groupId } = route.params || {};
	const group = useAppSelector(SelectorGetGroup(groupId));
  const counters = useAppSelector(SelectorGetCountersByIds(group.counters));

	return (
		<ScreenLayout additionalClass={style.groupScreen}>
			<View>
				<Paragraph size={'large'} contentType={'primary'}>
					Group item screen - {group.name}
				</Paragraph>
			</View>
		</ScreenLayout>
	);
};

export default GroupScreen;
