//ENTITIES
import { IncrementAction, SelectorGetCounterStep } from '../../../entities/counter';
//STORE
import { useAppDispatch, useAppSelector } from '../../../shared/store';
//MODEL
import type { UseIncrementProps } from './model/increment.model';

const useIncrement = ({ counterId }: UseIncrementProps) => {
	const dispatch = useAppDispatch();
	const step = useAppSelector(SelectorGetCounterStep(counterId));

	return () => {
		dispatch(IncrementAction({ counterId, amount: step }));
	};
};

export default useIncrement;
