//NATIVE
import { StatusBar } from 'expo-status-bar';
//NAVIGATION
import Navigation from './navigation/navigation';
//STORE
import { store } from './store/store';
import { Provider } from 'react-redux';

export default function App() {
	return (
		<Provider store={store}>
			<StatusBar style='auto' />
			<Navigation />
		</Provider>
	);
}
