import { configureStore } from '@reduxjs/toolkit';
// ...
import appSlice from './slices/app-slice';
import counterSlice from '../../entities/counter/store/counter-slice';

export const store = configureStore({
	reducer: {
		app: appSlice.reducer,
		counter: counterSlice.reducer
	}
});
