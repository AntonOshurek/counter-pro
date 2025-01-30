//NATIVE
import { StatusBar } from 'expo-status-bar';
//NAVIGATION
import Navigation from './navigation/navigation';
import FetchAppStoreHoc from './providers/fetch-app-store.hoc';

export default function App() {
	const FetchedStore = FetchAppStoreHoc(Navigation);

	return (
		<>
			<StatusBar style='auto' />
			<FetchedStore />
		</>
	);
}
