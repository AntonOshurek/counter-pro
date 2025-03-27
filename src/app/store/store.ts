import { configureStore } from '@reduxjs/toolkit';
// ...
import appSlice from './slices/app-slice';
import counterSlice from '../../entities/counter/store/counter-slice';
import groupSlice from '../../entities/group/store/group-slice';

export const store = configureStore({
	reducer: {
		app: appSlice.reducer,
		counter: counterSlice.reducer,
		group: groupSlice.reducer
	}
});
