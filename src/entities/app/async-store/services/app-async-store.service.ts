//STATE
import { appInitialState } from '../../store/state/app-state';
//TYPES
import type { IAppState } from '../../store/model/app-state.model';
//ABSTRACT
import { AbstractAsyncStoreService } from '@shared/services';
//CONSTANTS
import { APP_ASYNC_STORE_NAME } from '@shared/constants';

class AppAsyncStoreService extends AbstractAsyncStoreService<IAppState> {
	constructor() {
		super(appInitialState, APP_ASYNC_STORE_NAME);
	}
}

const appAsyncStoreService = new AppAsyncStoreService();

export default appAsyncStoreService;
