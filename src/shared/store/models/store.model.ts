import { Action, ThunkAction } from '@reduxjs/toolkit';
import store from '../../../app/store/store';
import { SQLiteDatabase } from 'expo-sqlite';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
  { db: SQLiteDatabase },
	Action<string>
>;
