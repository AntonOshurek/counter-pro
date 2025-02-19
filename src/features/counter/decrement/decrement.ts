//STORE
import { useAppDispatch } from '../../../shared/store';
import { DecrementAction } from '../../../entities/counter';
//MODEL
import type { UseDecrementProps } from './model/decrement.model';

const useDecrement = ({ counterId }: UseDecrementProps) => {
	const dispatch = useAppDispatch();

	return () => {
		dispatch(DecrementAction({ counterId, amount: 1 }));
	};
};

export default useDecrement;
