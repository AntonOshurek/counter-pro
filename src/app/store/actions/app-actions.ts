//STORE
import { appSlice } from '../slices';
//TYPES
import type { ISetNewThemeAction } from '../model/actions.model';
import type { AppThunk } from '../model/store.model';

const setNewThemeAction =
	(action: ISetNewThemeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(appSlice.actions.chengeTheme(action));

		//    asyncStorageRepo.sendData(getState().app);
	};

export { setNewThemeAction };
