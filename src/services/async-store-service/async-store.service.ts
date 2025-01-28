class AsyncStorageService {
	getItem<T>(itemName: string): T | Error | null {
		return null;
	}

	setItem<T>(itemName: string, payload: T) {}
}

const asyncStorageService = new AsyncStorageService();

export default asyncStorageService;
