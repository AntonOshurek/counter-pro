//ASYNC STORAGE
import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageService {
	async getItem<T>(itemName: string): Promise<T | Error | null> {
		try {
			const jsonValue: string | null = await AsyncStorage.getItem(itemName);

			if (jsonValue) {
				const parsedData: T = JSON.parse(jsonValue);
				return parsedData;
			} else {
				return null;
			}
		} catch (error) {
			if (error instanceof Error) {
				return new Error(error.message);
			} else {
				return new Error('Failed to get data from mobile storage.');
			}
		}
	}

	async setItem<T>(itemName: string, payload: T): Promise<Error | void> {
		try {
			const jsonValue = JSON.stringify(payload);
			await AsyncStorage.setItem(itemName, jsonValue);
		} catch (error) {
			if (error instanceof Error) {
				return new Error(error.message);
			} else {
				return new Error('Failed to set data to mobile storage.');
			}
		}
	}
}

const asyncStorageService = new AsyncStorageService();

export default asyncStorageService;
