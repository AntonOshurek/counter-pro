import { useCallback } from 'react';
//STORE
import { useAppDispatch } from '../../../shared/store';
//ENTITIES
import {
	deleteConnectionWithCounterAction,
	addConnectionWithCounterAction
} from '../../../entities/group';
//MODEL
import type { GroupToCounterConnectionProps } from './model/group-to-counter-connection.model';

const useGroupToCounterConnection = ({ groupId }: GroupToCounterConnectionProps) => {
	const dispatch = useAppDispatch();

	const addConnection = useCallback(
		(counterId: string) => {
			dispatch(addConnectionWithCounterAction({ counterId, groupId }));
		},
		[groupId, dispatch]
	);

	const deleteConnection = useCallback(
		(counterId: string) => {
			dispatch(deleteConnectionWithCounterAction({ counterId, groupId }));
		},
		[groupId, dispatch]
	);

	return {
		addConnection,
		deleteConnection
	};
};

export default useGroupToCounterConnection;
