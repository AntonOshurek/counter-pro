//NAVIGATION
import Navigation from './navigation/navigation';
import FetchAppStoreHoc from './providers/fetch-app-store.hoc';
//DB
import { initAppDatabase } from './db/init-app-database';
import { SQLiteProvider } from 'expo-sqlite';

export default function App() {
	const FetchedStore = FetchAppStoreHoc(Navigation);

	return (
		<SQLiteProvider databaseName='app.db' onInit={initAppDatabase}>
			<FetchedStore />
		</SQLiteProvider>
	);
}
