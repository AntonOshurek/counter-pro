//DB
import { SQLiteDatabase } from 'expo-sqlite';
//STORE
import counterSlice from '../../counter-slice';
//MODEL
import { ICreateCounterAction } from '@entities/counter/store/model/action.model';
//DB ACTIONS
import { insertOne } from '@entities/counter/db/actions/counter-db.actions';
//TYPES
import type { AppThunk } from '@shared/store';

const CreateCounterAction =
	(action: ICreateCounterAction, db: SQLiteDatabase): AppThunk =>
	async (dispatch, getState) => {
		dispatch(counterSlice.actions.createCounter({ newCounter: action.newCounter }));

		await insertOne(action.newCounter, db);
	};

export { CreateCounterAction };
