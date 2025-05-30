//APP
import App from './App';
//STORE
import { SQLiteProvider } from 'expo-sqlite';
import { initAppDatabase } from './db/init-app-database';
import StoreProvider from './providers/store-provider.hoc';
//ENTITIES
import { FetchAppDataProvider } from '@entities/app';
import { FetchCounterDataProvider } from '@entities/counter';
import { FetchGroupDataProvider } from '@entities/group';
//CONSTANTS
import { DATABASE_NAME } from '@shared/constants';

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
						<FetchGroupDataProvider>
							<App />
						</FetchGroupDataProvider>
					</FetchCounterDataProvider>
				</FetchAppDataProvider>
			</StoreProvider>
		</SQLiteProvider>
	);
};

export default Root;
