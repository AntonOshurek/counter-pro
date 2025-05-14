//DB
import { SQLiteDatabase } from 'expo-sqlite';
//STORE
import counterSlice from '../../counter-slice';
//MODEL
import {
	IAddConnectionToGroupAction,
	IDeleteConnectionWithGroupAction
} from '@entities/counter/store/model/action.model';
//DB ACTIONS
import { updateOne } from '@entities/counter/db/actions/counter-db.actions';
//TYPES
import type { AppThunk } from '@shared/store';

const deleteConnectionWithGroupAction =
	(action: IDeleteConnectionWithGroupAction, db: SQLiteDatabase): AppThunk =>
	async (dispatch, getState) => {
		dispatch(counterSlice.actions.deleteConnectionWithGroup(action));

		await updateOne(getState, action.counterId, db);
	};

const addConnectionWithGroupAction =
	(action: IAddConnectionToGroupAction, db: SQLiteDatabase): AppThunk =>
	async (dispatch, getState) => {
		dispatch(counterSlice.actions.addConnectionWithGroup(action));

		await updateOne(getState, action.counterId, db);
	};
export { addConnectionWithGroupAction, deleteConnectionWithGroupAction };
