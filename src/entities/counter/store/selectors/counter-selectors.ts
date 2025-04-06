//MODEL
import type { RootState } from '../../../../shared/store';
import {
	ISelectorGetCounter,
	ISelectorGetCounterCreatedDate,
	ISelectorGetCounterName,
	ISelectorGetCounters,
	ISelectorGetCounterStep,
	ISelectorGetIsPinned,
	ISelectorGetListSortType
} from '../model/selector.model';
import { convertObjectToArray } from '../../../../shared/lib/convertObjectToArray';
import { Counter } from '../../model/counter.model';
import { createSelector } from '@reduxjs/toolkit';

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

export {
	SelectorGetCounter,
	SelectorGetCounters,
	SelectorGetCounterName,
	SelectorGetCounterStep,
	SelectorGetCounterCreatedDate,
	SelectorGetListSortType,
	SelectorGetIsPinned,
	SelectorGetCountersArray
};
