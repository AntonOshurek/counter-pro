import { useCallback } from 'react';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import {
	deleteConnectionWithGroupAction,
	addConnectionWithGroupAction
} from '@entities/counter';

const useCounterToGroupConnection = () => {
	const dispatch = useAppDispatch();
  const db = useSQLiteContext();

	const addGroupToCounter = useCallback(
		(counterId: string, groupId: string) => {
			dispatch(addConnectionWithGroupAction({ counterId, groupId }, db));
		},
		[dispatch, db]
	);

	const deleteGroupFromCounter = useCallback(
		(counterId: string, groupId: string) => {
			dispatch(deleteConnectionWithGroupAction({ counterId, groupId }, db));
		},
		[dispatch, db]
	);

	return {
		addGroupToCounter,
		deleteGroupFromCounter
	};
};

export default useCounterToGroupConnection;
