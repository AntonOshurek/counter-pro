import { useCallback } from 'react';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch } from '@shared/store';
import { setNameAction } from '@entities/group';
//MODEL
import { UseChangeNameProps } from './model/change-name.model';

const useChangeName = ({ groupId }: UseChangeNameProps) => {
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();

	return useCallback(
		(newName: string) => {
			dispatch(setNameAction({ newName, groupId }, db));
		},
		[dispatch, groupId]
	);
};

export default useChangeName;
