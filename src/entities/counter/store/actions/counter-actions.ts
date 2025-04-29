//STORE
import counterSlice from '../counter-slice';
//REPOSITORY
import counterRepository from '../repository/counter-repository';
//MODEL
import type {
	ICreateCounterAction,
	IDecrementAction,
	IDeleteCounterAction,
	IIncrementAction,
	IResetAction,
	ISetIsPinnedAction,
	ISetListSortTypeAction,
	ISetNameAction,
	ISetStepAction,
	ISetToGroupAction,
	IDeleteConnectionWithGroupAction,
	IAddConnectionToGroupAction,
	ISetVibrationOnCounterClick
} from '../model/action.model';
//TYPES
import type { AppThunk, RootState } from '@shared/store';
//LIBS
import { omitKey } from '@shared/lib/object-lib';

const addToCounterRepo = (getState: () => RootState) => {
	counterRepository
		.setState(omitKey('counters', getState().counter))
		.then(res => {
			if (res !== true) {
				console.log(res);
				// возможно: dispatch(appSlice.actions.setError(...))
			}
		})
		.catch(error => {
			console.log(error);
			// возможно: dispatch(appSlice.actions.setError(...))
		});
};

const CreateCounterAction =
	(action: ICreateCounterAction): AppThunk =>
	async (dispatch, getState, { counterDbRepository }) => {
		dispatch(counterSlice.actions.createCounter({ newCounter: action.newCounter }));

		const state = getState();
		const createdCounter = state.counter.counters[action.newCounter.id];

		try {
			await counterDbRepository.insertOne(createdCounter);
		} catch (error) {
			console.error('Failed to update counter in SQLite:', error);
		}
	};

const IncrementAction =
	(action: IIncrementAction): AppThunk =>
	async (dispatch, getState, { counterDbRepository }) => {
		dispatch(counterSlice.actions.increment(action));

		const state = getState();
		const updatedCounter = state.counter.counters[action.counterId];

		try {
			await counterDbRepository.updateOne(updatedCounter);
		} catch (error) {
			console.error('Failed to update counter in SQLite:', error);
		}
	};

const ResetAction =
	(action: IResetAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.reset(action));
	};

const DecrementAction =
	(action: IDecrementAction): AppThunk =>
	async (dispatch, getState, { counterDbRepository }) => {
		dispatch(counterSlice.actions.decrement(action));

		const state = getState();
		const updatedCounter = state.counter.counters[action.counterId];

		try {
			await counterDbRepository.updateOne(updatedCounter);
		} catch (error) {
			console.error('Failed to update counter in SQLite:', error);
		}
	};

const SetStepAction =
	(action: ISetStepAction): AppThunk =>
	async (dispatch, getState, { counterDbRepository }) => {
		dispatch(counterSlice.actions.setStep(action));

		const state = getState();
		const updatedCounter = state.counter.counters[action.counterId];

		try {
			await counterDbRepository.updateOne(updatedCounter);
		} catch (error) {
			console.error('Failed to update counter in SQLite:', error);
		}
	};

const setToGroupAction =
	(action: ISetToGroupAction): AppThunk =>
	async (dispatch, getState, { counterDbRepository }) => {
		dispatch(counterSlice.actions.setToGroup(action));

		const state = getState();
		const updatedCounter = state.counter.counters[action.counterId];

		try {
			await counterDbRepository.updateOne(updatedCounter);
		} catch (error) {
			console.error('Failed to update counter in SQLite:', error);
		}
	};

const setNameAction =
	(action: ISetNameAction): AppThunk =>
	async (dispatch, getState, { counterDbRepository }) => {
		dispatch(counterSlice.actions.setName(action));

		const state = getState();
		const updatedCounter = state.counter.counters[action.counterId];

		try {
			await counterDbRepository.updateOne(updatedCounter);
		} catch (error) {
			console.error('Failed to update counter in SQLite:', error);
		}
	};

const deleteCounterAction =
	(action: IDeleteCounterAction): AppThunk =>
	async (dispatch, getState, { counterDbRepository }) => {
		dispatch(counterSlice.actions.delete(action));

		try {
			await counterDbRepository.deleteById(action.counterId);
		} catch (error) {
			console.error('Failed to delete counter in SQLite:', error);
		}
	};

const setListSortTypeAction =
	(action: ISetListSortTypeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setListSortType(action));

		addToCounterRepo(getState);
	};

const setIsPinnedAction =
	(action: ISetIsPinnedAction): AppThunk =>
	async (dispatch, getState, { counterDbRepository }) => {
		dispatch(counterSlice.actions.setIsPinnedCounter(action));

		const state = getState();
		const updatedCounter = state.counter.counters[action.counterId];

		try {
			await counterDbRepository.updateOne(updatedCounter);
		} catch (error) {
			console.error('Failed to update counter in SQLite:', error);
		}
	};

const deleteConnectionWithGroupAction =
	(action: IDeleteConnectionWithGroupAction): AppThunk =>
	async (dispatch, getState, { counterDbRepository }) => {
		dispatch(counterSlice.actions.deleteConnectionWithGroup(action));

		const state = getState();
		const updatedCounter = state.counter.counters[action.counterId];

		try {
			await counterDbRepository.updateOne(updatedCounter);
		} catch (error) {
			console.error('Failed to update counter in SQLite:', error);
		}
	};

const addConnectionWithGroupAction =
	(action: IAddConnectionToGroupAction): AppThunk =>
	async (dispatch, getState, { counterDbRepository }) => {
		dispatch(counterSlice.actions.addConnectionWithGroup(action));

		const state = getState();
		const updatedCounter = state.counter.counters[action.counterId];

		try {
			await counterDbRepository.updateOne(updatedCounter);
		} catch (error) {
			console.error('Failed to update counter in SQLite:', error);
		}
	};

const setVibrationOnCounterClickAction =
	(action: ISetVibrationOnCounterClick): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setVibrationOnCounterClick(action));

		addToCounterRepo(getState);
	};

export {
	IncrementAction,
	DecrementAction,
	setToGroupAction,
	SetStepAction,
	setNameAction,
	CreateCounterAction,
	deleteCounterAction,
	ResetAction,
	setListSortTypeAction,
	setIsPinnedAction,
	deleteConnectionWithGroupAction,
	addConnectionWithGroupAction,
	setVibrationOnCounterClickAction
};
