//ASYNC STORAGE
import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageService {
	async getItem<T>(itemName: string): Promise<T | null> {
		try {
			const jsonValue = await AsyncStorage.getItem(itemName);

			if (jsonValue) {
				return JSON.parse(jsonValue);
			}

			return null;
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(error.message);
			} else {
				throw new Error(
					'Failed to get data from mobile storage. Please restart Your aplicaaation and try again.'
				);
			}
		}
	}

	async setItem<T>(itemName: string, payload: T): Promise<Error | void> {
		try {
			const jsonValue = JSON.stringify(payload);
			await AsyncStorage.setItem(itemName, jsonValue);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(error.message);
			} else {
				throw new Error(
					'Failed to set data to mobile storage. Please restart Your aplicaaation and try again.'
				);
			}
		}
	}
}

const asyncStorageService = new AsyncStorageService();

export default asyncStorageService;
