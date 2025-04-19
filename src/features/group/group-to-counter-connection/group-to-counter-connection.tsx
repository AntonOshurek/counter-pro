import { useCallback } from 'react';
//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import {
	deleteConnectionWithCounterAction,
	addConnectionWithCounterAction
} from '@entities/group';

const useGroupToCounterConnection = () => {
	const dispatch = useAppDispatch();

	const addCounterToGroup = useCallback(
		(counterId: string, groupId: string) => {
			dispatch(addConnectionWithCounterAction({ counterId, groupId }));
		},
		[dispatch]
	);

	const deleteCounterFromGroup = useCallback(
		(counterId: string, groupId: string) => {
			dispatch(deleteConnectionWithCounterAction({ counterId, groupId }));
		},
		[dispatch]
	);

	return {
		addCounterToGroup,
		deleteCounterFromGroup
	};
};

export default useGroupToCounterConnection;
