//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '@shared/types/navigation';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import { CreateGroupAction, Group } from '@entities/group';
//CONSTANTS
import { StackScreens } from '@shared/constants';
//LIBS
import { v4 } from 'uuid';
import { createNewItemTitleDate } from '@shared/lib/date-lib';

const useCreateNewGroup = () => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();

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

		dispatch(CreateGroupAction({ newGroup }, db));
		navigation.navigate(StackScreens.GroupScreen, { groupId: newGroup.id });
	};
};

export default useCreateNewGroup;
