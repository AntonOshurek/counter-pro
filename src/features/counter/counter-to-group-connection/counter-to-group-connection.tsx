import { useCallback } from 'react';
//STORE
import { useAppDispatch } from '../../../shared/store';
//ENTITIES
import {
	deleteConnectionWithGroupAction,
	addConnectionWithGroupAction
} from '../../../entities/counter';
//MODEL
import type { CounterToGroupConnectionProps } from './model/counter-to-group-connection.model';

const useCounterToGroupConnection = ({ counterId }: CounterToGroupConnectionProps) => {
	const dispatch = useAppDispatch();

	const addConnection = useCallback(
		(groupId: string) => {
			dispatch(addConnectionWithGroupAction({ counterId, groupId }));
		},
		[counterId, dispatch]
	);

	const deleteConnection = useCallback(
		(groupId: string) => {
			dispatch(deleteConnectionWithGroupAction({ counterId, groupId }));
		},
		[counterId, dispatch]
	);

	return {
		addConnection,
		deleteConnection
	};
};

export default useCounterToGroupConnection;
