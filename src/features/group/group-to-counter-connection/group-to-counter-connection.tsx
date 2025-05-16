import { useCallback } from 'react';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import {
	deleteConnectionWithCounterAction,
	addConnectionWithCounterAction
} from '@entities/group';

const useGroupToCounterConnection = () => {
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();

	const addCounterToGroup = useCallback(
		(counterId: string, groupId: string) => {
			dispatch(addConnectionWithCounterAction({ counterId, groupId }, db));
		},
		[dispatch]
	);

	const deleteCounterFromGroup = useCallback(
		(counterId: string, groupId: string) => {
			dispatch(deleteConnectionWithCounterAction({ counterId, groupId }, db));
		},
		[dispatch]
	);

	return {
		addCounterToGroup,
		deleteCounterFromGroup
	};
};

export default useGroupToCounterConnection;
