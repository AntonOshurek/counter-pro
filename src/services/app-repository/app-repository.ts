//STORE/STATE
import { appInitialState } from '../../app/store/state';
//SERVICES
import asyncStorageService from '../async-store-service/async-store.service';
//TYPES
import type { IAppState } from '../../app/store/model/state.model';

class AppRepository {
	#defaultAppState: IAppState;
	#appStoreName: string;

	constructor(defaultAppState: IAppState, appStoreName: string) {
		this.#defaultAppState = defaultAppState;
		this.#appStoreName = appStoreName;
	}

	async #getStateFromStorage() {
		const state = await asyncStorageService.getItem<IAppState>(this.#appStoreName);
		return state;
	}

	async #sendStateToStorage(data: IAppState) {
		const result = await asyncStorageService.setItem<IAppState>(this.#appStoreName, data);
		return result;
	}

	#getDefaultState(): IAppState {
		return this.#defaultAppState;
	}

	async getState(): Promise<IAppState | Error> {
		try {
			const state = await this.#getStateFromStorage();

			if (state === null) {
				return this.#getDefaultState();
			}

			return state;
		} catch (error) {
			if (error instanceof Error) {
				return new Error(error.message);
			} else {
				return new Error(
					'Failed to set data to mobile storage. Please restart Your aplicaaation and try again.'
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
					'Failed to set data to mobile storage. Please restart Your aplicaaation and try again.'
				);
			}
		}
	}
}

const appRepository = new AppRepository(appInitialState, 'app-store');

export default appRepository;
