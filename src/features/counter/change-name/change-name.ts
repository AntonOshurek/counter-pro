import { useCallback } from 'react';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch } from '@shared/store';
import { setNameAction } from '@entities/counter';
//MODEL
import { UseChangeNameProps } from './model/change-name.model';

const useChangeName = ({ counterId }: UseChangeNameProps) => {
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();

	return useCallback(
		(newName: string) => {
			dispatch(setNameAction({ newName, counterId }, db));
		},
		[dispatch, db, counterId]
	);
};

export default useChangeName;
