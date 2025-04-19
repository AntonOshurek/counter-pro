import { useCallback } from 'react';
//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../../app/navigation/model';
//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import { deleteGroupAction } from '@entities/group';
//MODEL
import type { UseDeleteGroupProps } from './model/delete-group.model';

const useDeleteCounter = ({ groupId }: UseDeleteGroupProps) => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	return useCallback(() => {
		const parentNavigation = navigation.getParent();

		if (parentNavigation) {
			parentNavigation.goBack();
		} else {
			navigation.goBack();
		}

		dispatch(deleteGroupAction({ groupId }));
	}, [dispatch, groupId, navigation]);
};

export default useDeleteCounter;
