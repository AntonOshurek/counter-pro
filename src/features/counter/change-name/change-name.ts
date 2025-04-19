import { useCallback } from 'react';
//STORE
import { useAppDispatch } from '@shared/store';
import { setNameAction } from '@entities/counter';
//MODEL
import { UseChangeNameProps } from './model/change-name.model';

const useChangeName = ({ counterId }: UseChangeNameProps) => {
	const dispatch = useAppDispatch();

	return useCallback(
		(newName: string) => {
			dispatch(setNameAction({ newName, counterId }));
		},
		[dispatch, counterId]
	);
};

export default useChangeName;
