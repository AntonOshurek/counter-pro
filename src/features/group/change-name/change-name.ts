import { useCallback } from 'react';
//STORE
import { useAppDispatch } from '../../../shared/store';
import { setNameAction } from '../../../entities/group';
//MODEL
import { UseChangeNameProps } from './model/change-name.model';

const useChangeName = ({ groupId }: UseChangeNameProps) => {
	const dispatch = useAppDispatch();

	return useCallback(
		(newName: string) => {
			dispatch(setNameAction({ newName, groupId }));
		},
		[dispatch, groupId]
	);
};

export default useChangeName;
