//STATE
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { groupInitialState } from './state/group-state';
//MODEL
import type { ICreateGroupAction } from './model/action.model';

const groupSlice = createSlice({
	name: 'group',
	initialState: groupInitialState,

	reducers: {
		createGroup: (state, action: PayloadAction<ICreateGroupAction>) => {
			const { newGroup } = action.payload;

			state.groups[newGroup.id] = {
				...newGroup
			};
		}
	}
});

export default groupSlice;
