//MODEL
import type { RootState } from '../../../../shared/store';
import type { ISelectorGetCounter, ISelectorGetCounters } from '../model/selector.model';

const SelectorGetCounter: ISelectorGetCounter =
	(counterId: string) => (state: RootState) => {
		return state.counter[counterId];
	};

const SelectorGetCounters: ISelectorGetCounters = () => (state: RootState) => {
	return state.counter;
};

export { SelectorGetCounter, SelectorGetCounters };
