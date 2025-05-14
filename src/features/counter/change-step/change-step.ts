import { useCallback } from 'react';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch } from '@shared/store';
import { SetStepAction } from '@entities/counter';
//MODEL
import { UseChangeStepProps } from './model/change-step.model';

const useChangeStep = ({ counterId }: UseChangeStepProps) => {
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();

	return useCallback(
		(newStep: number) => {
			dispatch(SetStepAction({ newStep, counterId }, db));
		},
		[dispatch, counterId, db]
	);
};

export default useChangeStep;
