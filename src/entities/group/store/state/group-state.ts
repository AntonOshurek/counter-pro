//MODEL
import type { IGroupState } from '../model/group-state.model';
//CONSTANTS
import { SortOptions } from '../../../../shared/constants/sort';

const groupInitialState: IGroupState = {
	groupListSortType: SortOptions.ByDate,
	groups: {
		['g-1']: {
			id: 'g-1',
			name: 'Group 1',
			counters: ['counter-1', 'counter-2', 'counter-3']
		},
		['g-2']: {
			id: 'g-2',
			name: 'Group 2',
			counters: ['counter-4', 'counter-5', 'counter-6']
		}
	}
};

export { groupInitialState };
