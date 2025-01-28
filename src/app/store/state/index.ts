//VARIABLES
import { themes } from '../../../global/variables/constants';
//TYPES
import type { AppState } from '../model/state.model';

export const appInitialState: AppState = {
	theme: themes[2]
};
