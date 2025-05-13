import { ComponentType, useEffect } from 'react';
//STORE
import { useAppDispatch } from '@shared/store';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//ENTITIES
import { UpdateStateAction } from '@entities/counter/store/actions/counter.actions';
//SERVICES
import counterAsyncStoreService from '@entities/counter/async-store/services/counter-async-store.service';
import counterSqliteService from '@entities/counter/store/services/counter-sqlite.service';
//TYPES
import type { ICounterState } from '@entities/counter/store/model/counter-state.model';

const FetchCounterStoreHoc = <P extends object>(Component: ComponentType<P>) => {
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();

	useEffect(() => {
		// console.log('try to fetch counter store');
		(() => async () => {
			try {
				const state = await counterAsyncStoreService.getState();
				const countersFromDb = await counterSqliteService.getAll(db);

				if (state instanceof Error) {
					//dispatch this error
					console.error('Failed to load state:', state.message);
					return;
				}

				const fullStore: ICounterState = {
					...state,
					counters: { ...countersFromDb }
				};

				dispatch(UpdateStateAction({ newState: fullStore }));
			} catch (error) {
				//dispatch this error
				console.error('Unexpected error in fetchState:', error);
			}
		})();
	}, [dispatch, db]); //dispatch, db

	return (props: P) => {
		return <Component {...props} />;
	};
};

export default FetchCounterStoreHoc;
