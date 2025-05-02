//APP
import App from './App';
//STORE
import { initAppDatabase } from './db/init-app-database';
import { SQLiteProvider } from 'expo-sqlite';
import StoreProvider from './providers/store-provider.hoc';
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
