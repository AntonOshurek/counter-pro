//MODEL
import type { RootState } from '../../../../shared/store';
import {
	ISelectorGetCounter,
	ISelectorGetCounterName,
	ISelectorGetCounters,
	ISelectorGetCounterStep
} from '../model/selector.model';

const SelectorGetCounter: ISelectorGetCounter =
	(counterId: string) => (state: RootState) => {
		return state.counter[counterId];
	};

const SelectorGetCounters: ISelectorGetCounters = () => (state: RootState) => {
	return state.counter;
};

const SelectorGetCounterName: ISelectorGetCounterName =
	(counterId: string) => (state: RootState) => {
		return state.counter[counterId]?.name;
	};

const SelectorGetCounterStep: ISelectorGetCounterStep =
	(counterId: string) => (state: RootState) => {
		return state.counter[counterId]?.step;
	};

export {
	SelectorGetCounter,
	SelectorGetCounters,
	SelectorGetCounterName,
	SelectorGetCounterStep
};
