//STORE
import appSlice from '../app-slice';
//MODEL
import type { ISetNewThemeAction, IUpdateStateAction } from '../model/actions.model';
//TYPES
import type { AppThunk } from '@shared/store';
//ASYNC STORE ACTIONS
import { setStateToAppAsyncStoreAction } from '../../async-store/actions/app-async-store.actions';

const SetNewThemeAction =
	(action: ISetNewThemeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.changeTheme(action));

		setStateToAppAsyncStoreAction(getState);
	};

const updateState =
	(action: IUpdateStateAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.setState(action));

		setStateToAppAsyncStoreAction(getState);
	};

export { SetNewThemeAction, updateState };
