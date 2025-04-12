//STORE
import { useAppDispatch } from '../../../shared/store';
import { useCallback } from 'react';
//MODEL
import type { GroupToCounterConnectionProps } from './model/group-to-counter-connection.model';

const useGroupToCounterConnection = ({ groupId }: GroupToCounterConnectionProps) => {
	const dispatch = useAppDispatch();

	const addConnection = useCallback(
		(counterId: string) => {
			console.log(`Добавить связь: counterId=${counterId}, groupId=${groupId}`);
			// dispatch(addConnectionAction({ counterId, groupId }));
		},
		[groupId, dispatch]
	);

	const deleteConnection = useCallback(
		(counterId: string) => {
			console.log(`Удалить связь: counterId=${counterId}, groupId=${groupId}`);
			// dispatch(deleteConnectionAction({ counterId, groupId }));
		},
		[groupId, dispatch]
	);

	return {
		addConnection,
		deleteConnection
	};
};

export default useGroupToCounterConnection;
