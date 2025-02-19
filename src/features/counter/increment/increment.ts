//ENTITIES
import { IncrementAction } from '../../../entities/counter';
//STORE
import { useAppDispatch } from '../../../shared/store';
//MODEL
import type { UseIncrementProps } from './model/increment.model';

const useIncrement = ({ counterId }: UseIncrementProps) => {
	const dispatch = useAppDispatch();

	return () => {
		dispatch(IncrementAction({ counterId, amount: 1 }));
	};
};

export default useIncrement;
