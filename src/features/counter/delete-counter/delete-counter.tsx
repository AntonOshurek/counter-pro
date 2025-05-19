import { useCallback } from 'react';
//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '@shared/types/navigation';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch, useAppSelector } from '@shared/store';
import { deleteCounterAction, SelectorGetCounter } from '@entities/counter';
//MODEL
import type { UseDeleteCounterProps } from './model/delete-counter.model';

const useDeleteCounter = ({
	counterId,
	groupToCounterConnection
}: UseDeleteCounterProps) => {
	const dispatch = useAppDispatch();
	const counter = useAppSelector(SelectorGetCounter(counterId));
	const { deleteCounterFromGroup } = groupToCounterConnection();
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();
	const db = useSQLiteContext();

	return useCallback(() => {
		const parentNavigation = navigation.getParent();

		if (parentNavigation) {
			parentNavigation.goBack();
		} else {
			navigation.goBack();
		}

		if (counter.group) {
			deleteCounterFromGroup(counterId, counter.group);
		}

		dispatch(deleteCounterAction({ counterId }, db));
	}, [dispatch, counterId, navigation, db, counter, deleteCounterFromGroup]);
};

export default useDeleteCounter;
