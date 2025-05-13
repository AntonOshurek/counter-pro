//SERVICES
import counterAsyncStoreService from '../services/counter-async-store.service';
//TYPES
import type { RootState } from '@shared/store';
//UTILS
import { omitKey } from '@shared/lib/object-lib';

const setStateToAsyncStoreAction = (getState: () => RootState) => {
  counterAsyncStoreService
		.setState(omitKey('counters', getState().counter))
		.then(res => {
			if (res !== true) {
				console.log(res);
				// возможно: dispatch(appSlice.actions.setError(...))
			}
		})
		.catch(error => {
			console.log(error);
			// возможно: dispatch(appSlice.actions.setError(...))
		});
};

export { setStateToAsyncStoreAction };
