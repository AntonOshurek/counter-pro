import { SortOptions } from '../constants/sort';
import { Counter } from '../../entities/counter';

const sortCountersByType = (sortType: SortOptions, counters: Counter[]): Counter[] => {
	switch (sortType) {
		case SortOptions.ByDate:
			return counters.sort((a, b) => b.createdAtTimestamp - a.createdAtTimestamp);
		case SortOptions.ByName:
			return counters.sort((a, b) => a.name.localeCompare(b.name));
		default:
			return counters;
	}
};

const sortCounters = (sortType: SortOptions, counters: Counter[]): Counter[] => {
	return counters.sort((a, b) => {
		if (a.isPinned && !b.isPinned) return -1;
		if (!a.isPinned && b.isPinned) return 1;

		switch (sortType) {
			case SortOptions.ByDate:
				return b.createdAtTimestamp - a.createdAtTimestamp;
			case SortOptions.ByName:
				return a.name.localeCompare(b.name);
			default:
				return 0;
		}
	});
};

export { sortCountersByType, sortCounters };
