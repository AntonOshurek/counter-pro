//STORE
import appSlice from '../app-slice';
//REPOSITORY
import appRepository from '@services/app-repository/app-repository';
//MODEL
import type { ISetNewThemeAction, IUpdateStateAction } from '../model/actions.model';
//TYPES
import type { AppThunk } from '@shared/store';

const SetNewThemeAction =
	(action: ISetNewThemeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.changeTheme(action));

		appRepository
			.setState(getState().app)
			.then(res => {
				if (res !== true) {
					console.log(res);
					//dispatch error if occur to redux and show this error in styles
				}
			})
			.catch(error => {
				console.log(error);
				//dispatch error if occur to redux and show this error in styles
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
					//dispatch error if occur to redux and show this error in styles
				}
			})
			.catch(error => {
				console.log(error);
				//dispatch error if occur to redux and show this error in styles
			});
	};

export { SetNewThemeAction, updateState };
