import { useCallback } from 'react';
//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '@shared/types/navigation';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch, useAppSelector } from '@shared/store';
//ENTITIES
import { deleteGroupAction, SelectorGetGroup } from '@entities/group';
//MODEL
import type { UseDeleteGroupProps } from './model/delete-group.model';

const useDeleteGroup = ({ groupId, counterToGroupConnection }: UseDeleteGroupProps) => {
	const dispatch = useAppDispatch();
	const group = useAppSelector(SelectorGetGroup(groupId));
	const { deleteGroupFromCounter } = counterToGroupConnection();
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();
	const db = useSQLiteContext();

	return useCallback(() => {
		const parentNavigation = navigation.getParent();

		if (parentNavigation) {
			parentNavigation.goBack();
		} else {
			navigation.goBack();
		}

		if (group.counters.length > 0) {
			group.counters.forEach(counterId => {
				deleteGroupFromCounter(counterId, groupId);
			});
		}

		dispatch(deleteGroupAction({ groupId }, db));
	}, [dispatch, groupId, navigation]);
};

export default useDeleteGroup;
