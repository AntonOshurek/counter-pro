//CONSTANTS
import { Themes } from '@shared/constants';
//TYPES
import type { IAppState } from '../model/state.model';

export const appInitialState: IAppState = {
	theme: Themes.system
};
