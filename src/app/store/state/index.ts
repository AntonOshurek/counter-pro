//CONSTANTS
import { themes } from '../../../entities/theme/data/constants';
//TYPES
import type { IAppState } from '../model/state.model';

export const appInitialState: IAppState = {
  theme: themes[2]
};
