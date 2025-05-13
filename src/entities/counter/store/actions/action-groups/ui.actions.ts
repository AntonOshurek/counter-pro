//STORE
import counterSlice from '../../counter-slice';
//MODEL
import {
	ISetListSortTypeAction,
	ISetVibrationOnCounterClick
} from '@entities/counter/store/model/action.model';
//TYPES
import type { AppThunk } from '@shared/store';
//ASYNC STORE ACTIONS
import { setStateToAsyncStoreAction } from '../../../async-store/actions/counter-async-store.actions';

const setListSortTypeAction =
	(action: ISetListSortTypeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setListSortType(action));

		setStateToAsyncStoreAction(getState);
	};

const setVibrationOnCounterClickAction =
	(action: ISetVibrationOnCounterClick): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setVibrationOnCounterClick(action));

		setStateToAsyncStoreAction(getState);
	};

export { setListSortTypeAction, setVibrationOnCounterClickAction };
