//STORE/STATE
import { appInitialState } from '../../app/store/state';
//TYPES
import type { AppState } from '../../app/store/model/state.model';

class AppRepository {
	#defaultAppState: AppState;
	#appStoreName: string;

	constructor(defaultAppState: AppState, appStoreName: string) {
		this.#defaultAppState = defaultAppState;
		this.#appStoreName = appStoreName;
	}

	getState(): AppState {
		return this.#defaultAppState;
	}

	setState(newState: AppState) {}
}

const appRepository = new AppRepository(appInitialState, 'app-store');

export default appRepository;
