//STATE
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { groupInitialState } from './state/group-state';
//MODEL
import type { ICreateGroupAction, ISetIsPinnedAction } from './model/action.model';

const groupSlice = createSlice({
	name: 'group',
	initialState: groupInitialState,

	reducers: {
		createGroup: (state, action: PayloadAction<ICreateGroupAction>) => {
			const { newGroup } = action.payload;

			state.groups[newGroup.id] = {
				...newGroup
			};
		},
		setIsPinnedGroup: (state, action: PayloadAction<ISetIsPinnedAction>) => {
			const { isPinned, groupId } = action.payload;
			state.groups[groupId].isPinned = isPinned;
		}
	}
});

export default groupSlice;
