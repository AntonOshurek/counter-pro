import { Action, ThunkAction } from '@reduxjs/toolkit';
import { createReduxStore, ExtraThunkArg } from '../../../app/store/store';

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
export type AppDispatch = ReturnType<ReturnType<typeof createReduxStore>['dispatch']>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	ExtraThunkArg,
	Action<string>
>;
