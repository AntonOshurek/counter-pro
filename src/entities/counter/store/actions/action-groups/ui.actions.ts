//STORE
import counterSlice from '../../counter-slice';
//SERVICES
import counterRepository from '@entities/counter/store/services/counter-async-store.service';
//MODEL
import {
	ISetListSortTypeAction,
	ISetVibrationOnCounterClick
} from '@entities/counter/store/model/action.model';
//TYPES
import type { AppThunk, RootState } from '@shared/store';
//UTILS
import { omitKey } from '@shared/lib/object-lib';

const setStateToAsyncStore = (getState: () => RootState) => {
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

const setListSortTypeAction =
	(action: ISetListSortTypeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setListSortType(action));

		setStateToAsyncStore(getState);
	};

const setVibrationOnCounterClickAction =
	(action: ISetVibrationOnCounterClick): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setVibrationOnCounterClick(action));

		setStateToAsyncStore(getState);
	};

export { setListSortTypeAction, setVibrationOnCounterClickAction };
