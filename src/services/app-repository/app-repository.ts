//SERVICES
import asyncStorageService from '../async-store-service/async-store.service';
//STATE
import { appInitialState } from '../../app/store/state/app-state';
//TYPES
import type { IAppState } from '../../app/store/model/state.model';

class AppRepository {
	#defaultAppState: IAppState;
	#appStoreName: string;

	constructor(initialState: IAppState, appStoreName: string) {
		this.#defaultAppState = initialState;
		this.#appStoreName = appStoreName;
	}

	async #getStateFromStorage() {
		return await asyncStorageService.getItem<IAppState>(this.#appStoreName);
	}

	async #sendStateToStorage(data: IAppState) {
		return await asyncStorageService.setItem<IAppState>(this.#appStoreName, data);
	}

	#getDefaultState(): IAppState {
		return this.#defaultAppState;
	}

	async getState(): Promise<IAppState | Error> {
		try {
			const state = await this.#getStateFromStorage();
    console.log('await fetching state from async storage')
			if (state === null) {
				return this.#getDefaultState();
			}

			return state;
		} catch (error) {
			if (error instanceof Error) {
				return new Error(error.message);
			} else {
        return new Error(
					'Failed to set data to mobile storage. Please restart Your application and try again.'
				);
			}
		}
	}

	async setState(newState: IAppState): Promise<boolean | Error> {
		try {
			await this.#sendStateToStorage(newState);
			return true;
		} catch (error) {
			if (error instanceof Error) {
				return new Error(error.message);
			} else {
				return new Error(
					'Failed to set data to mobile storage. Please restart Your application and try again.'
				);
			}
		}
	}
}

const appRepository = new AppRepository(appInitialState, 'app-store');

export default appRepository;
