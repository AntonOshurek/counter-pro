//MODEL
import type { RootState } from '../../../../shared/store';
import {
	ISelectorGetCounter,
	ISelectorGetCounterCreatedDate,
	ISelectorGetCounterName,
	ISelectorGetCounters,
	ISelectorGetCounterStep
} from '../model/selector.model';

const SelectorGetCounter: ISelectorGetCounter =
	(counterId: string) => (state: RootState) => {
		return state.counter.counters[counterId];
	};

const SelectorGetCounters: ISelectorGetCounters = () => (state: RootState) => {
	return state.counter.counters;
};

const SelectorGetCounterName: ISelectorGetCounterName =
	(counterId: string) => (state: RootState) => {
		return state.counter.counters[counterId]?.name;
	};

const SelectorGetCounterStep: ISelectorGetCounterStep =
	(counterId: string) => (state: RootState) => {
		return state.counter.counters[counterId]?.step;
	};

const SelectorGetCounterCreatedDate: ISelectorGetCounterCreatedDate =
	(counterId: string) => (state: RootState) => {
		return state.counter.counters[counterId]?.createdAt;
	};

export {
	SelectorGetCounter,
	SelectorGetCounters,
	SelectorGetCounterName,
	SelectorGetCounterStep,
	SelectorGetCounterCreatedDate
};
