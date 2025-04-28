//APP
import App from './App';
//STORE
import { Provider } from 'react-redux';
import { initAppDatabase } from './db/init-app-database';
import { SQLiteProvider } from 'expo-sqlite';
import StoreProvider from './providers/store-provider.hoc';
// import { store } from './store/store';

const Root = () => {
	return (
		<SQLiteProvider databaseName='app.db' onInit={initAppDatabase}>
			<StoreProvider>
				<App />
			</StoreProvider>
		</SQLiteProvider>
		// <Provider store={store}>
		// </Provider>
	);
};

export default Root;
