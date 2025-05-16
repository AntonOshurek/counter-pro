//DB
import { SQLiteDatabase } from 'expo-sqlite';
//STORE
import counterSlice from '../../counter-slice';
//MODEL
import { IDeleteCounterAction } from '@entities/counter/store/model/action.model';
//DB ACTIONS
import { deleteOne } from '@entities/counter/db/actions/counter-db.actions';
//TYPES
import type { AppThunk } from '@shared/store';

const deleteCounterAction =
	(action: IDeleteCounterAction, db: SQLiteDatabase): AppThunk =>
	async (dispatch, getState) => {
		dispatch(counterSlice.actions.delete(action));

		await deleteOne(action.counterId, db);
	};
export { deleteCounterAction };
