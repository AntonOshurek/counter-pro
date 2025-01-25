//NATIVE
import { StatusBar } from 'expo-status-bar';
//NAVIGATION
import Navigation from './navigation/navigation';

export default function App() {
	return (
		<>
			<StatusBar style='auto' />
			<Navigation />
		</>
	);
}
