import { createSelector } from '@reduxjs/toolkit';
//MODEL
import type { RootState } from '@shared/store';
import type {
	ISelectorGetCounter,
	ISelectorGetCounterCreatedDate,
	ISelectorGetCounterName,
	ISelectorGetCounters,
	ISelectorGetCounterStep,
	ISelectorGetIsPinned,
	ISelectorGetListSortType,
	ISelectorGetVibrationOnClick
} from '../model/selector.model';
import type { Counter } from '../../model/counter.model';
//LIBS
import { convertObjectToArray } from '@shared/lib/convertObjectToArray';

const SelectorGetCounter: ISelectorGetCounter =
	(counterId: string) => (state: RootState) => {
		return state.counter.counters[counterId];
	};

const SelectorGetCounters: ISelectorGetCounters = () => (state: RootState) => {
	return state.counter.counters;
};

const SelectorGetCountersArray = createSelector(
	(state: RootState) => state.counter.counters,
	(countersMap: Record<string, Counter>): Counter[] =>
		convertObjectToArray<Counter>(countersMap)
);

const SelectorGetCounterName: ISelectorGetCounterName =
	(counterId: string) => (state: RootState) => {
		return state.counter.counters[counterId].name;
	};

const SelectorGetCounterStep: ISelectorGetCounterStep =
	(counterId: string) => (state: RootState) => {
		return state.counter.counters[counterId]?.step;
	};

const SelectorGetCounterCreatedDate: ISelectorGetCounterCreatedDate =
	(counterId: string) => (state: RootState) => {
		return state.counter.counters[counterId].createdAt;
	};

const SelectorGetListSortType: ISelectorGetListSortType = () => (state: RootState) => {
	return state.counter.counterListSortType;
};

const SelectorGetIsPinned: ISelectorGetIsPinned =
	(counterId: string) => (state: RootState) => {
		return state.counter.counters[counterId].isPinned;
	};

const SelectorGetVibrationOnClick: ISelectorGetVibrationOnClick =
	() => (state: RootState) => {
		return state.counter.vibrationOnClick;
	};

export {
	SelectorGetCounter,
	SelectorGetCounters,
	SelectorGetCounterName,
	SelectorGetCounterStep,
	SelectorGetCounterCreatedDate,
	SelectorGetListSortType,
	SelectorGetIsPinned,
	SelectorGetCountersArray,
	SelectorGetVibrationOnClick
};
