//STORE
import { useAppDispatch } from '../../../shared/store';
//ENTITIES
import { ResetAction } from '../../../entities/counter/';
//MODEL
import type { ResetCounterProps } from './model/reset-counter.model';

const useResetCounter = ({ counterId }: ResetCounterProps) => {
	const dispatch = useAppDispatch();

	return () => {
		dispatch(ResetAction({ counterId }));
	};
};

export default useResetCounter;
