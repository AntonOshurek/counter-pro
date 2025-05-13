//ABSTRACT
import { AbstractAsyncStoreService } from '@shared/services';
//TYPES
import type { IGroupState } from '../../store/model/group-state.model';
//STATE
import { groupInitialState } from '../../store/state/group-state';
//LIBS
import { omitKey } from '@shared/lib/object-lib';

class GroupAsyncStoreService extends AbstractAsyncStoreService<
	Omit<IGroupState, 'groups'>
> {
	constructor() {
		super(omitKey('groups', groupInitialState), 'group-store');
	}
}

const groupAsyncStoreService = new GroupAsyncStoreService();

export default groupAsyncStoreService;
