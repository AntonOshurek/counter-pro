import { ReactNode, useEffect, useState } from 'react';
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
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const fetchCounterState = async () => {
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
				setReady(true);
			} catch (error) {
				console.error('Unexpected error in fetchCounterState:', error);
			}
		};

		if (db) fetchCounterState();
	}, [db, dispatch]);

	if (!ready) return null;

	return <>{children}</>;
};

export default FetchCounterDataProvider;
