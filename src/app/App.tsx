//NATIVE
import { StatusBar } from 'expo-status-bar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
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
