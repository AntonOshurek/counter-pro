import { configureStore } from '@reduxjs/toolkit';
import { openDatabaseSync } from 'expo-sqlite';
// SLICES
import { appSlice } from '@entities/app';
import { counterSlice } from '@entities/counter/';
import { groupSlice } from '@entities/group/';
import { DATABASE_NAME } from '@shared/constants';

const db = openDatabaseSync(DATABASE_NAME);

const store = configureStore({
	reducer: {
		app: appSlice.reducer,
		counter: counterSlice.reducer,
		group: groupSlice.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: { db }
			}
		})
});

export default store;
