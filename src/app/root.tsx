//APP
import App from './App';
//STORE
import { SQLiteProvider } from 'expo-sqlite';
import { initAppDatabase } from './db/init-app-database';
import StoreProvider from './providers/store-provider.hoc';
//CONSTANTS
import { DATABASE_NAME } from '@shared/constants';
import { FetchAppDataProvider } from '@entities/app';
import { FetchCounterDataProvider } from '@entities/counter';

const Root = () => {
	return (
		<SQLiteProvider
			databaseName={DATABASE_NAME}
			onInit={async db => {
				await initAppDatabase(db);
			}}
		>
			<StoreProvider>
				<FetchAppDataProvider>
					<FetchCounterDataProvider>
						<App />
					</FetchCounterDataProvider>
				</FetchAppDataProvider>
			</StoreProvider>
		</SQLiteProvider>
	);
};

export default Root;
