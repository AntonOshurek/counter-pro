//APP
import App from './App';
//STORE
import { initAppDatabase } from './db/init-app-database';
import { SQLiteProvider } from 'expo-sqlite';
import StoreProvider from './providers/store-provider.hoc';

const Root = () => {
	return (
		<SQLiteProvider databaseName='app.db' onInit={initAppDatabase}>
			<StoreProvider>
				<App />
			</StoreProvider>
		</SQLiteProvider>
	);
};

export default Root;
