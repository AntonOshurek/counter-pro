//STORE
import appSlice from '../app-slice';
//REPOSITORY
import appRepository from '@entities/app/store/repository/app-repository';
//MODEL
import type { ISetNewThemeAction, IUpdateStateAction } from '../model/actions.model';
//TYPES
import type { AppThunk, RootState } from '@shared/store';

const addToAppRepo = (getState: () => RootState) => {
	appRepository
		.setState(getState().app)
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

const SetNewThemeAction =
	(action: ISetNewThemeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.changeTheme(action));

		addToAppRepo(getState);
	};

const updateState =
	(action: IUpdateStateAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.setState(action));

		addToAppRepo(getState);
	};

export { SetNewThemeAction, updateState };
