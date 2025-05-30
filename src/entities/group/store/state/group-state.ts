//MODEL
import type { IGroupState } from '../model/group-state.model';
//CONSTANTS
import { SortOptions } from '@shared/constants/sort';

const now = new Date();

const groupInitialState: IGroupState = {
	groupListSortType: SortOptions.ByDate,
	groups: {
		// ['g-1']: {
		// 	id: 'g-1',
		// 	name: 'main counters',
		// 	counters: ['counter-1', 'counter-2', 'counter-3'],
		// 	isPinned: false,
		// 	createdAt: now.toISOString(),
		// 	createdAtTimestamp: now.getTime()
		// },
		// ['g-2']: {
		// 	id: 'g-2',
		// 	name: 'Rest',
		// 	counters: ['counter-4', 'counter-5', 'counter-6'],
		// 	isPinned: false,
		// 	createdAt: now.toISOString(),
		// 	createdAtTimestamp: now.getTime()
		// }
	}
};

export { groupInitialState };
