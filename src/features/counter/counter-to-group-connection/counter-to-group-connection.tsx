import { useCallback } from 'react';
//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import {
	deleteConnectionWithGroupAction,
	addConnectionWithGroupAction
} from '@entities/counter';

const useCounterToGroupConnection = () => {
	const dispatch = useAppDispatch();

	const addGroupToCounter = useCallback(
		(counterId: string, groupId: string) => {
			dispatch(addConnectionWithGroupAction({ counterId, groupId }));
		},
		[dispatch]
	);

	const deleteGroupFromCounter = useCallback(
		(counterId: string, groupId: string) => {
			dispatch(deleteConnectionWithGroupAction({ counterId, groupId }));
		},
		[dispatch]
	);

	return {
		addGroupToCounter,
		deleteGroupFromCounter
	};
};

export default useCounterToGroupConnection;
