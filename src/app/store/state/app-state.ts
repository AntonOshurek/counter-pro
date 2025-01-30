//CONSTANTS
import { themes } from '../../../shaared/constants/theme';
//TYPES
import type { IAppState } from '../model/state.model';

export const appInitialState: IAppState = {
  theme: themes[2]
};
