// providers/StoreProvider.tsx
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '@entities/counter';
import SQLiteService from '@shared/services/sqlite/sqlite.service';
import { useSQLiteContext } from 'expo-sqlite';
import { ReactNode } from 'react';

interface StoreProviderProps {
	children: ReactNode;
}

function StoreProvider({ children }: StoreProviderProps) {
	const db = useSQLiteContext(); // здесь уже можно вызывать
	const sqliteService = new SQLiteService(db);

	const store = configureStore({
		reducer: {
			counter: counterSlice.reducer
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: { sqliteService }
				}
			})
	});

	return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
