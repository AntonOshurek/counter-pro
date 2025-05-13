//STATE
import { appInitialState } from '../../store/state/app-state';
//TYPES
import type { IAppState } from '../../store/model/app-state.model';
//ABSTRACT
import { AbstractAsyncStoreService } from '@shared/services';

class AppAsyncStoreService extends AbstractAsyncStoreService<IAppState> {
	constructor() {
		super(appInitialState, 'app-store');
	}
}

const appAsyncStoreService = new AppAsyncStoreService();

export default appAsyncStoreService;
