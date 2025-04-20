//ABSTRACT
import { AbstractRepository } from '@shared/services';
//TYPES
import type { IGroupState } from '../model/group-state.model';
//STATE
import { groupInitialState } from '../state/group-state';
//LIBS
import { omitKey } from '@shared/lib/object-lib';

class GroupRepository extends AbstractRepository<Omit<IGroupState, 'groups'>> {
	constructor() {
		super(omitKey('groups', groupInitialState), 'group-store');
	}
}

const groupRepository = new GroupRepository();

export default groupRepository;
