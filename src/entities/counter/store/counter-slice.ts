//STATE
import { counterInitialState } from './state/counter-state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//MODEL
import {
	IIncrementAction,
	IDecrementAction,
	ISetStepAction,
	ISetToGroupAction,
	ISetNameAction,
	ICreateCounterAction
} from './model/action.model';

const counterSlice = createSlice({
	name: 'counter',
	initialState: counterInitialState,

	reducers: {
		createCounter: (state, action: PayloadAction<ICreateCounterAction>) => {
			const { newCounter } = action.payload;

			state[newCounter.id] = {
				...newCounter
			};
		},
		increment: (state, action: PayloadAction<IIncrementAction>) => {
			const { counterId, amount } = action.payload;

			state[counterId].count = state[counterId].count + amount;
		},
		decrement: (state, action: PayloadAction<IDecrementAction>) => {
			const { counterId, amount } = action.payload;

			state[counterId].count = state[counterId].count - amount;
		},
		setToGroup: (state, action: PayloadAction<ISetToGroupAction>) => {
			const { counterId, newGroupId } = action.payload;

			state[counterId].group = newGroupId;
		},
		setName: (state, action: PayloadAction<ISetNameAction>) => {
			const { counterId, newName } = action.payload;

			state[counterId].name = newName;
		},
		setStep: (state, action: PayloadAction<ISetStepAction>) => {
			const { counterId, newStep } = action.payload;

			state[counterId].step = newStep;
		}
	}
});

export default counterSlice;
