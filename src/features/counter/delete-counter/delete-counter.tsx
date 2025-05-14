import { useCallback } from 'react';
//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '@shared/types/navigation';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch } from '@shared/store';
import { deleteCounterAction } from '@entities/counter';
//MODEL
import type { UseDeleteCounterProps } from './model/delete-counter.model';

const useDeleteCounter = ({ counterId }: UseDeleteCounterProps) => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();
	const db = useSQLiteContext();

	return useCallback(() => {
		const parentNavigation = navigation.getParent();

		if (parentNavigation) {
			parentNavigation.goBack();
		} else {
			navigation.goBack();
		}

		dispatch(deleteCounterAction({ counterId }, db));
	}, [dispatch, counterId, navigation, db]);
};

export default useDeleteCounter;
