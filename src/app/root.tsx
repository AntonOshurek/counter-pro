//APP
import App from './App';
//STORE
import { Provider } from 'react-redux';
import { store } from './store/store';

const Root = () => {
	return (
			<Provider store={store}>
				<App />
			</Provider>
	);
};

export default Root;
