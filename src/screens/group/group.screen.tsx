//NATIVE
import { View } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//STYLES
import style from './styles/style';
import { RouteProp, useRoute } from '@react-navigation/native';
import type { NavigationStackParams, StackParams } from '../../app/navigation/model/stack.model';
import { Paragraph } from '../../shaared/ui';
import groups from '../../mok-data/groups';

type GroupScreenRouteProp = RouteProp<NavigationStackParams, StackParams.GroupScreen>;

const GroupScreen = () => {

  const route = useRoute<GroupScreenRouteProp>();
  const { groupId } = route.params || {};

  const group = groups.find((group) => group.id === groupId);

	return (
		<ScreenLayout additionalClass={style.groupScreen}>
			<View>
				<Paragraph size={'large'} contentType={'primary'}>Group item screen {group?.name}</Paragraph>
			</View>
		</ScreenLayout>
	);
};

export default GroupScreen;
