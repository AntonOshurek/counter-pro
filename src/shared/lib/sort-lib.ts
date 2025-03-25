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

export { sortCountersByType };
