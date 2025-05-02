import { ReactNode } from 'react';
import { Provider } from 'react-redux';
// STORE
import store from '../store/store';

interface StoreProviderProps {
	children: ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
