//NAVIGATION
import Navigation from './navigation/navigation';
import { FetchCounterDataProvider } from '@entities/counter/';
import { FetchAppDataProvider } from '@entities/app/';

const App = () => {
	return (
		<FetchAppDataProvider>
			<FetchCounterDataProvider>
				<Navigation />
			</FetchCounterDataProvider>
		</FetchAppDataProvider>
	);
};

export default App;
