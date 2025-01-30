//STATE
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { appInitialState } from '../state';
//TYPES
import type { IUpdateStateAction } from '../model/actions.model';
import type { ISetNewThemeAction } from '../../../entities/theme/model/actions.model';

export const appSlice = createSlice({
	name: 'app',
	initialState: appInitialState,

	reducers: {
		changeTheme: (state, action: PayloadAction<ISetNewThemeAction>) => {
			state.theme = action.payload.newTheme;
		},
		setState: (state, action: PayloadAction<IUpdateStateAction>) => {
			return action.payload.newState;
		}
	}
});

export default appSlice;
