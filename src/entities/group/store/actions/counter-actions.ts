//STORE
import groupSlice from '../group-slice';
//MODEL
import { ICreateGroupAction } from '../model/action.model';
//TYPES
import type { AppThunk } from '../../../../shared/store';

const CreateGroupAction =
	(action: ICreateGroupAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(groupSlice.actions.createGroup({ newGroup: action.newGroup }));
	};

export { CreateGroupAction };
