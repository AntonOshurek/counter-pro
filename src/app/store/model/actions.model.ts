//TYPES
import type { Themes } from '../../../global/types/app';
import type { IAppState } from './state.model';

export interface ISetNewThemeAction {
	newTheme: Themes;
}

export interface IUpdateStateAction {
	newState: IAppState;
}
