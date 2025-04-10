//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../../app/navigation/model';
//STORE
import { useAppDispatch } from '../../../shared/store';
//ENTITIES
import { CreateGroupAction, Group } from '../../../entities/group';
//CONSTANTS
import { StackScreens } from '../../../shared/constants';
//LIBS
import { v4 } from 'uuid';
import { createNewItemTitleDate } from '../../../shared/lib/date-lib';

const useCreateNewGroup = () => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();
	const dispatch = useAppDispatch();

	return () => {
		const now = new Date();

		const newGroup: Group = {
			id: v4(),
			name: `New Group ${createNewItemTitleDate()}`,
			counters: [],
			isPinned: false,
			createdAt: now.toISOString(),
			createdAtTimestamp: now.getTime()
		};

		dispatch(CreateGroupAction({ newGroup }));
		navigation.navigate(StackScreens.GroupScreen, { groupId: newGroup.id });
	};
};

export default useCreateNewGroup;
