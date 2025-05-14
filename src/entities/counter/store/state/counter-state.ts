//MODEL
import { ICounterState } from '../model/counter-state.model';
import { SortOptions } from '@shared/constants/sort';

const counterInitialState: ICounterState = {
	counterListSortType: SortOptions.ByDate,
	vibrationOnClick: true,
	counters: {}
};

export { counterInitialState };
