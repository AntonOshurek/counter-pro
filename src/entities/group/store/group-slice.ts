//STATE
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { groupInitialState } from './state/group-state';
//MODEL
import {
	ICreateGroupAction,
	ISetIsPinnedAction,
	ISetListSortTypeAction,
	IDeleteGroupAction,
	ISetNameAction,
	IDeleteConnectionWithCounterAction,
	IAddConnectionToCounterAction
} from './model/action.model';

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
		},
		setListSortType: (state, action: PayloadAction<ISetListSortTypeAction>) => {
			const { sortType } = action.payload;
			state.groupListSortType = sortType;
		},
		delete: (state, action: PayloadAction<IDeleteGroupAction>) => {
			const { groupId } = action.payload;

			if (state.groups.hasOwnProperty(groupId)) {
				delete state.groups[groupId];
			}
		},
		setName: (state, action: PayloadAction<ISetNameAction>) => {
			const { newName, groupId } = action.payload;
			state.groups[groupId].name = newName;
		},
		deleteConnectionWithCounter: (
			state,
			action: PayloadAction<IDeleteConnectionWithCounterAction>
		) => {
			const { groupId, counterId } = action.payload;
			if (
				state.groups[groupId].counters.includes(counterId) &&
				state.groups.hasOwnProperty(groupId)
			) {
				state.groups[groupId].counters.filter(counter => counter !== counterId);
			}
		},
		addConnectionToCounter: (
			state,
			action: PayloadAction<IAddConnectionToCounterAction>
		) => {
			const { groupId, counterId } = action.payload;
			state.groups[groupId].counters.push(counterId);
		}
	}
});

export default groupSlice;
