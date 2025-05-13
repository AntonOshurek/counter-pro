//STORE
import counterSlice from '../../counter-slice';
//MODEL
import { IUpdateState } from '@entities/counter/store/model/action.model';
//TYPES
import type { AppThunk } from '@shared/store';

const UpdateStateAction =
	(action: IUpdateState): AppThunk =>
	async (dispatch, getState) => {
		dispatch(counterSlice.actions.updateState({ newState: action.newState }));
	};
export { UpdateStateAction };
