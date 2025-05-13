//SERVICES
import appAsyncStoreService from '@entities/app/async-store/services/app-async-store.service';
//TYPES
import type { RootState } from '@shared/store';

const setStateToAppAsyncStoreAction = (getState: () => RootState) => {
	appAsyncStoreService
		.setState(getState().app)
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

export { setStateToAppAsyncStoreAction };
