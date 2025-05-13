//NAVIGATION
import Navigation from './navigation/navigation';
import { FetchAppDataHoc } from '@entities/app/';
import { FetchCounterDataHoc } from '@entities/counter/';

export default function App() {
	const FetchedStore = FetchAppDataHoc(Navigation);
	const FetchCounterStore = FetchCounterDataHoc(FetchedStore);

	return <FetchCounterStore />;
}
