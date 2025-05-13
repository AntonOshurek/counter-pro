//STORE
import counterSlice from '../../counter-slice';
//MODEL
import { IDeleteCounterAction } from '@entities/counter/store/model/action.model';
//SERVICES
import counterSqliteService from '@entities/counter/store/services/counter-sqlite.service';
//TYPES
import type { AppThunk } from '@shared/store';

const deleteCounterAction =
	(action: IDeleteCounterAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.delete(action));

		await counterSqliteService.deleteById(db, action.counterId);
	};
export { deleteCounterAction };
