//REPOSITORY
import appRepository from '../../../services/app-repository/app-repository';
//STORE
import { appSlice } from '../slices';
//TYPES
import type { ISetNewThemeAction, IUpdateStateAction } from '../model/actions.model';
import type { AppThunk } from '../model/store.model';

const setNewThemeAction =
	(action: ISetNewThemeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.changeTheme(action));

		appRepository
			.setState(getState().app)
			.then(res => {
				if (res !== true) {
					console.log(res);
					//dispatch error if occur to redux and show this error in ui
				}
			})
			.catch(error => {
				console.log(error);
				//dispatch error if occur to redux and show this error in ui
			});
	};

const updateState =
	(action: IUpdateStateAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.setState(action));

		appRepository
			.setState(getState().app)
			.then(res => {
				if (res !== true) {
					console.log(res);
					//dispatch error if occur to redux and show this error in ui
				}
			})
			.catch(error => {
				console.log(error);
				//dispatch error if occur to redux and show this error in ui
			});
	};

export { setNewThemeAction, updateState };
