//SERVICES
import groupAsyncStoreService from '../services/group-async-store.service';
//TYPES
import type { RootState } from '@shared/store';
//UTILS
import { omitKey } from '@shared/lib/object-lib';

const setStateToGroupAsyncStoreAction = (getState: () => RootState) => {
	groupAsyncStoreService
		.setState(omitKey('groups', getState().group))
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

export { setStateToGroupAsyncStoreAction };
