import { GestureHandlerRootView } from 'react-native-gesture-handler';
//APP
import App from './App';
//STORE
import { Provider } from 'react-redux';
import { store } from './store/store';

const Root = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Provider store={store}>
				<App />
			</Provider>
		</GestureHandlerRootView>
	);
};

export default Root;
