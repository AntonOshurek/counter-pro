//MODEL
import type { RootState } from '../../../../shared/store';
import type { ISelectorGetCounter } from '../model/selector.model';

const SelectorGetCounter: ISelectorGetCounter =
	(counterId: string) => (state: RootState) => {
		return state.counter[counterId];
	};

export { SelectorGetCounter };
