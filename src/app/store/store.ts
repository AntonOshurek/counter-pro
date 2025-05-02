import { configureStore } from '@reduxjs/toolkit';
// ...
import { appSlice } from '@entities/app';
import { counterSlice } from '@entities/counter/';
import { groupSlice } from '@entities/group/';

const store = configureStore({
	reducer: {
		app: appSlice.reducer,
		counter: counterSlice.reducer,
		group: groupSlice.reducer
	}
});

export default store;
