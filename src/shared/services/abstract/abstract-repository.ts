import asyncStorageService from '../async-storage/async-store.service';

abstract class AbstractAsyncStoreService<T> {
	#defaultState: T;
	#storeName: string;

	protected constructor(initialState: T, storeName: string) {
		this.#defaultState = initialState;
		this.#storeName = storeName;
	}

	async #getStateFromStorage() {
		return await asyncStorageService.getItem<T>(this.#storeName);
	}

	async #sendStateToStorage(data: T) {
		return await asyncStorageService.setItem<T>(this.#storeName, data);
	}

	#getDefaultState(): T {
		return this.#defaultState;
	}

	async getState(): Promise<T | Error> {
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
					'Failed to set data to mobile storage. Please restart Your application and try again.'
				);
			}
		}
	}

	async setState(newState: T): Promise<boolean | Error> {
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

export default AbstractAsyncStoreService;
