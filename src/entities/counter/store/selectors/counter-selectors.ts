//MODEL
import type { RootState } from '../../../../shared/store';
import {
	ISelectorGetCounter,
	ISelectorGetCounterCreatedDate,
	ISelectorGetCounterName,
	ISelectorGetCounters,
	ISelectorGetCountersByIds,
	ISelectorGetCounterStep,
	ISelectorGetIsPinned,
	ISelectorGetListSortType
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

const SelectorGetListSortType: ISelectorGetListSortType = () => (state: RootState) => {
	return state.counter.counterListSortType;
};

const SelectorGetIsPinned: ISelectorGetIsPinned =
	(counterId: string) => (state: RootState) => {
		return state.counter.counters[counterId].isPinned;
	};

const SelectorGetCountersByIds: ISelectorGetCountersByIds =
	(counterIds: string[]) => (state: RootState) => {
		return counterIds.map(id => state.counter.counters[id]);
	};

export {
	SelectorGetCounter,
	SelectorGetCounters,
	SelectorGetCounterName,
	SelectorGetCounterStep,
	SelectorGetCounterCreatedDate,
	SelectorGetListSortType,
	SelectorGetIsPinned,
	SelectorGetCountersByIds
};
