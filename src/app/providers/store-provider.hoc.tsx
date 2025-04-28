// providers/StoreProvider.tsx
import { ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../store/store';
// Services
import { useCounterDbRepository } from '@entities/counter/';

interface StoreProviderProps {
	children: ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
	const counterDbRepository = useCounterDbRepository();

	const store = useMemo(
		() => createReduxStore({ counterDbRepository }),
		[counterDbRepository]
	);

	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
