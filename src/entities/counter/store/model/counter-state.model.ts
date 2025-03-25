//MODEL
import type { Counter } from '../../model/counter.model';
//VARIABLES
import { SortOptions } from '../../../../shared/constants/sort';

interface ICounterState {
	counterListSortType: SortOptions;
	counters: Record<string, Counter>;
}

export { ICounterState };
