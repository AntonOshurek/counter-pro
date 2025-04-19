//MODEL
import type { Group } from '../../model/group.model';
//VARIABLES
import { SortOptions } from '@shared/constants/sort';

interface IGroupState {
	groupListSortType: SortOptions;
	groups: Record<string, Group>;
}

export { IGroupState };
