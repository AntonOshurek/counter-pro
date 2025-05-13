//MODEL
import { ISetNewThemeAction, IUpdateStateAction } from './store/model/actions.model';
import { IAppState } from './store/model/app-state.model';
//STORE
import { appSlice } from './store/app-slice';
import { SetNewThemeAction, updateState } from './store/actions/app.actions';
import { SelectorGetTheme } from './store/selectors/app.selectors';
//PROVIDERS
import FetchAppDataHoc from './providers/fetch-app-data.hoc';

export {
	SetNewThemeAction,
	SelectorGetTheme,
	ISetNewThemeAction,
	appSlice,
	updateState,
	IUpdateStateAction,
	IAppState,
	FetchAppDataHoc
};
