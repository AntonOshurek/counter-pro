//APP
import App from './App';
//STORE
import { SQLiteProvider } from 'expo-sqlite';
import { initAppDatabase } from './db/init-app-database';
import StoreProvider from './providers/store-provider.hoc';
//CONSTANTS
import { DATABASE_NAME } from '@shared/constants';

const Root = () => {
	return (
		<SQLiteProvider databaseName={DATABASE_NAME} onInit={initAppDatabase}>
			<StoreProvider>
				<App />
			</StoreProvider>
		</SQLiteProvider>
	);
};

export default Root;
