//VARIABLES
import { themes } from '../../../global/variables/constants';
//TYPES
import type { IAppState } from '../model/state.model';

export const appInitialState: IAppState = {
	theme: themes[2]
};
