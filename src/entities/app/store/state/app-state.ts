//CONSTANTS
import { Themes } from '@shared/constants';
//TYPES
import type { IAppState } from '../model/app-state.model';

const appInitialState: IAppState = {
	theme: Themes.system
};

export { appInitialState };
