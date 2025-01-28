import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
//TYPES
import type { Themes } from '../../../../global/types/app';
//VARIABLES
import { themes } from '../../../../global/variables/constants';

interface AppState {
	theme: Themes;
}

const appInitialState: AppState = {
	theme: themes[2]
};

export const appSlice = createSlice({
	name: 'app',
	initialState: appInitialState,

	reducers: {
		chengeTheme: (state, action: PayloadAction<Themes>) => {
			state.theme = action.payload;
		}
	}
});

export const { chengeTheme } = appSlice.actions;

export default appSlice.reducer;
