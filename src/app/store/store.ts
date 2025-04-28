import { configureStore } from '@reduxjs/toolkit';
// ...
import { appSlice } from '@entities/app';
import { counterSlice } from '@entities/counter/';
import { groupSlice } from '@entities/group/';
import CounterDbRepository from '@entities/counter/store/repository/counter-db-repository';

// export const store = configureStore({
// 	reducer: {
// 		app: appSlice.reducer,
// 		counter: counterSlice.reducer,
// 		group: groupSlice.reducer
// 	}
// });

type ExtraThunkArg = {
	counterDbRepository: CounterDbRepository;
};

export const createReduxStore = (extraArgument?: ExtraThunkArg) => {
	return configureStore({
		reducer: {
			app: appSlice.reducer,
			counter: counterSlice.reducer,
			group: groupSlice.reducer
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: {
					extraArgument
				}
			})
	});
};
