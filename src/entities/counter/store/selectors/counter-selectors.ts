//MODEL
import type { RootState } from '../../../../shared/store';
import { ISelectorGetCounter, ISelectorGetCounterName, ISelectorGetCounters } from '../model/selector.model';

const SelectorGetCounter: ISelectorGetCounter =
	(counterId: string) => (state: RootState) => {
		return state.counter[counterId];
	};

const SelectorGetCounters: ISelectorGetCounters = () => (state: RootState) => {
	return state.counter;
};

const SelectorGetCounterName: ISelectorGetCounterName = (counterId: string) => (state: RootState) => {
  return state.counter[counterId].name;
}

export { SelectorGetCounter, SelectorGetCounters, SelectorGetCounterName };
