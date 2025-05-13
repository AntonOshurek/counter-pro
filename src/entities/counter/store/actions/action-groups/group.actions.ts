//STORE
import counterSlice from '../../counter-slice';
//MODEL
import {
	IAddConnectionToGroupAction,
	IDeleteConnectionWithGroupAction,
	ISetToGroupAction
} from '@entities/counter/store/model/action.model';
//DB ACTIONS
import { updateOne } from '@entities/counter/db/actions/counter-db.actions';
//TYPES
import type { AppThunk } from '@shared/store';

const setToGroupAction =
	(action: ISetToGroupAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.setToGroup(action));

		await updateOne(getState, action.counterId, db);
	};

const deleteConnectionWithGroupAction =
	(action: IDeleteConnectionWithGroupAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.deleteConnectionWithGroup(action));

		await updateOne(getState, action.counterId, db);
	};

const addConnectionWithGroupAction =
	(action: IAddConnectionToGroupAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.addConnectionWithGroup(action));

		await updateOne(getState, action.counterId, db);
	};
export {
	setToGroupAction,
	addConnectionWithGroupAction,
	deleteConnectionWithGroupAction
};
