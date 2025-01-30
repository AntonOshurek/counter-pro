//REPOSITORY
import appRepository from '../../../services/app-repository/app-repository';
//STORE
import appSlice from '../slices/app-slice';
//TYPES
import type { IUpdateStateAction } from '../model/actions.model';
import type { AppThunk } from '../model/store.model';

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

export { updateState };
