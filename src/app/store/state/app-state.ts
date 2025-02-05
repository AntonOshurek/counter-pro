//CONSTANTS
import { Themes } from '../../../shaared/constants';
//TYPES
import type { IAppState } from '../model/state.model';

export const appInitialState: IAppState = {
  theme: Themes.light
};
