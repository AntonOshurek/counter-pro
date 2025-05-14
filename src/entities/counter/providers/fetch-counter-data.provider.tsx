import { ReactNode, useEffect } from 'react';
// STORE
import { useAppDispatch } from '@shared/store';
import { UpdateStateAction } from '@entities/counter/store/actions/counter.actions';
// DB
import { useSQLiteContext } from 'expo-sqlite';
// SERVICES
import counterAsyncStoreService from '@entities/counter/async-store/services/counter-async-store.service';
import counterSqliteService from '@entities/counter/store/services/counter-sqlite.service';
// TYPES
import { ICounterState } from '@entities/counter/store/model/counter-state.model';

interface Props {
	children: ReactNode;
}

const FetchCounterDataProvider = ({ children }: Props) => {
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();

	useEffect(() => {
		const fetchState = async () => {
			try {
				const asyncState = await counterAsyncStoreService.getState();
				const countersFromDb = await counterSqliteService.getAll(db);

				if (asyncState instanceof Error) {
					console.error('Failed to load state:', asyncState.message);
					return;
				}

				const fullStore: ICounterState = {
					...asyncState,
					counters: { ...countersFromDb }
				};

				dispatch(UpdateStateAction({ newState: fullStore }));
			} catch (error) {
				console.error('Unexpected error in fetchState:', error);
			}
		};

		fetchState();
	}, [db, dispatch]);

	return <>{children}</>;
};

export default FetchCounterDataProvider;
