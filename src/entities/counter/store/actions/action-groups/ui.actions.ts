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
import { setStateToCounterAsyncStoreAction } from '../../../async-store/actions/counter-async-store.actions';

const setListSortTypeAction =
	(action: ISetListSortTypeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setListSortType(action));

		setStateToCounterAsyncStoreAction(getState);
	};

const setVibrationOnCounterClickAction =
	(action: ISetVibrationOnCounterClick): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setVibrationOnCounterClick(action));

		setStateToCounterAsyncStoreAction(getState);
	};

export { setListSortTypeAction, setVibrationOnCounterClickAction };
