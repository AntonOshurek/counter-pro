import { useCallback } from 'react';
//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../../app/navigation/model';
//STORE
import { useAppDispatch } from '../../../shared/store';
//ENTITIES
import { deleteCounterAction } from '../../../entities/counter';
//MODEL
import type { UseDeleteCounterProps } from './model/delete-counter.model';

const useDeleteCounter = ({ counterId }: UseDeleteCounterProps) => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	return useCallback(() => {
		const parentNavigation = navigation.getParent();

		if (parentNavigation) {
			parentNavigation.goBack();
		} else {
			navigation.goBack();
		}

		dispatch(deleteCounterAction({ counterId }));
	}, [dispatch, counterId, navigation]);
};

export default useDeleteCounter;
