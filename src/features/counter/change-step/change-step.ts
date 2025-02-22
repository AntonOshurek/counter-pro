import { useCallback } from 'react';
//STORE
import { useAppDispatch } from '../../../shared/store';
import { SetStepAction } from '../../../entities/counter';
//MODEL
import { UseChangeStepProps } from './model/change-step.model';

const useChangeStep = ({ counterId }: UseChangeStepProps) => {
	const dispatch = useAppDispatch();

	return useCallback(
		(newStep: number) => {
			dispatch(SetStepAction({ newStep, counterId }));
		},
		[dispatch, counterId]
	);
};

export default useChangeStep;
