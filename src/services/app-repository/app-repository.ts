//STORE/STATE
import { appInitialState } from '../../app/store/state';
//TYPES
import type { IAppState } from '../../app/store/model/state.model';

class AppRepository {
	#defaultAppState: IAppState;
	#appStoreName: string;

	constructor(defaultAppState: IAppState, appStoreName: string) {
		this.#defaultAppState = defaultAppState;
		this.#appStoreName = appStoreName;
	}

	#sendDataToStorage<T>(data: T) {}

	#getDefaultData(): IAppState {
		return this.#defaultAppState;
	}

	getState(): IAppState {
		return this.#getDefaultData();
	}

	setState(newState: IAppState) {
		this.#sendDataToStorage<string>('test');
	}
}

const appRepository = new AppRepository(appInitialState, 'app-store');

export default appRepository;
