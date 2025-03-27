//STORE
import { RootState } from '../../../../shared/store';
//MODEL
import { Group } from '../../model/group.model';
//CONSTANTS
import { SortOptions } from '../../../../shared/constants/sort';

interface ISelectorGetGroup {
	(groupId: string): (state: RootState) => Group;
}

interface ISelectorGetGroups {
  (): (state: RootState) => Record<string, Group>;
}

export { ISelectorGetGroup, ISelectorGetGroups };
