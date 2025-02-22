//ENTITIES
import { DecrementAction, SelectorGetCounterStep } from '../../../entities/counter';
//STORE
import { useAppDispatch, useAppSelector } from '../../../shared/store';
//MODEL
import type { UseDecrementProps } from './model/decrement.model';

const useDecrement = ({ counterId }: UseDecrementProps) => {
	const dispatch = useAppDispatch();
	const step = useAppSelector(SelectorGetCounterStep(counterId));

	return () => {
		dispatch(DecrementAction({ counterId, amount: step }));
	};
};

export default useDecrement;
