//MODEL
import { RootState } from '../../../../shared/store';
import { ISelectorGetCounter } from '../model/selector.model';

const SelectorGetCounter: ISelectorGetCounter =
	(counterId: string) =>
	(state: RootState) => {
		return state.counter.find(counter => counter.id === counterId);
	};

export { SelectorGetCounter };
