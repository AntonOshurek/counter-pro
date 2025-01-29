import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
//TYPES
import type { ISetNewThemeAction } from '../../model/actions.model';
//STATE
import { appInitialState } from '../../state';

export const appSlice = createSlice({
	name: 'app',
	initialState: appInitialState,

	reducers: {
		changeTheme: (state, action: PayloadAction<ISetNewThemeAction>) => {
			state.theme = action.payload.newTheme;
		}
	}
});

export default appSlice.reducer;
