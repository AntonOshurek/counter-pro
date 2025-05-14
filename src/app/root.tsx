import { useState } from 'react';
//APP
import App from './App';
//STORE
import { SQLiteProvider } from 'expo-sqlite';
import { initAppDatabase } from './db/init-app-database';
import StoreProvider from './providers/store-provider.hoc';
//CONSTANTS
import { DATABASE_NAME } from '@shared/constants';

const Root = () => {
	const [isDbReady, setDbReady] = useState(false);

	return (
		<SQLiteProvider
			databaseName={DATABASE_NAME}
			onInit={async db => {
				await initAppDatabase(db);
				setDbReady(true);
			}}
		>
			<StoreProvider>{isDbReady && <App />}</StoreProvider>
		</SQLiteProvider>
	);
};

export default Root;
