//TYPES
import type { IAppState } from './app-state.model';
import type { AppThemes } from '@shared/types';

interface IUpdateStateAction {
	newState: IAppState;
}

interface ISetNewThemeAction {
	newTheme: AppThemes;
}

export { IUpdateStateAction, ISetNewThemeAction };
