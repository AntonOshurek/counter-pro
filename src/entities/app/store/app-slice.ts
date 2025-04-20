//STATE
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { appInitialState } from './state/app-state';
//TYPES
import type { IUpdateStateAction, ISetNewThemeAction } from './model/actions.model';

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
