//NAVIGATION
import Navigation from './navigation/navigation';
import FetchAppStoreHoc from './providers/fetch-app-store.hoc';
import FetchCounterStoreHoc from '@entities/counter/db/hoc/fetch-counter-store.hoc';

export default function App() {
	const FetchedStore = FetchAppStoreHoc(Navigation);
  const FetchCounterStore = FetchCounterStoreHoc(FetchedStore);

	return <FetchCounterStore />;
}
