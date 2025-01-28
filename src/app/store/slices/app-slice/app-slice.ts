import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
//TYPES
import type { Themes } from '../../../../global/types/app';
import type { ISetNewThemeAction } from '../../model/actions.model';
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
		chengeTheme: (state, action: PayloadAction<ISetNewThemeAction>) => {
			state.theme = action.payload.newTheme;
		}
	}
});

// export const { chengeTheme } = appSlice.actions;

export default appSlice.reducer;
