//STATE
import { counterInitialState } from './state/counter-state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//MODEL
import type {
	IIncrementAction,
	IDecrementAction,
	ISetStepAction,
	ISetToGroupAction,
	ISetNameAction,
	ICreateCounterAction,
	IDeleteCounterAction,
	IResetAction,
	ISetListSortTypeAction,
	ISetIsPinnedAction,
	IDeleteConnectionWithGroupAction,
	IAddConnectionToGroupAction
} from './model/action.model';

const counterSlice = createSlice({
	name: 'counter',
	initialState: counterInitialState,

	reducers: {
		createCounter: (state, action: PayloadAction<ICreateCounterAction>) => {
			const { newCounter } = action.payload;

			state.counters[newCounter.id] = {
				...newCounter
			};
		},
		increment: (state, action: PayloadAction<IIncrementAction>) => {
			const { counterId, amount } = action.payload;

			state.counters[counterId].count = state.counters[counterId].count + amount;
		},
		decrement: (state, action: PayloadAction<IDecrementAction>) => {
			const { counterId, amount } = action.payload;

			state.counters[counterId].count = state.counters[counterId].count - amount;
		},
		reset: (state, action: PayloadAction<IResetAction>) => {
			const { counterId } = action.payload;

			state.counters[counterId].count = 0;
		},
		setToGroup: (state, action: PayloadAction<ISetToGroupAction>) => {
			const { counterId, newGroupId } = action.payload;

			state.counters[counterId].group = newGroupId;
		},
		setName: (state, action: PayloadAction<ISetNameAction>) => {
			const { counterId, newName } = action.payload;

			state.counters[counterId].name = newName;
		},
		setStep: (state, action: PayloadAction<ISetStepAction>) => {
			const { counterId, newStep } = action.payload;

			state.counters[counterId].step = newStep;
		},
		delete: (state, action: PayloadAction<IDeleteCounterAction>) => {
			const { counterId } = action.payload;

			if (state.counters.hasOwnProperty(counterId)) {
				delete state.counters[counterId];
			}
		},
		setListSortType: (state, action: PayloadAction<ISetListSortTypeAction>) => {
			state.counterListSortType = action.payload.sortType;
		},
		setIsPinnedCounter: (state, action: PayloadAction<ISetIsPinnedAction>) => {
			const { isPinned, counterId } = action.payload;
			state.counters[counterId].isPinned = isPinned;
		},
		addConnectionWithGroup: (
			state,
			action: PayloadAction<IAddConnectionToGroupAction>
		) => {
			const { counterId, groupId } = action.payload;
			state.counters[counterId].group = groupId;
		},
		deleteConnectionWithGroup: (
			state,
			action: PayloadAction<IDeleteConnectionWithGroupAction>
		) => {
			const { counterId, groupId } = action.payload;
			if (state.counters[counterId].group === groupId) {
				state.counters[counterId].group = '';
			}
		}
	}
});

export default counterSlice;
