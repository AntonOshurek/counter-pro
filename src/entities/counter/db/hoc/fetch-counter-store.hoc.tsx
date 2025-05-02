import { ComponentType, useEffect } from 'react';
//STORE
import { useAppDispatch } from '@shared/store';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//REPOSITORY
import counterRepository from '@entities/counter/store/repository/counter-repository';
import counterSqliteService from '@entities/counter/store/repository/counter-sqlite-service';
import { ICounterState } from '@entities/counter/store/model/counter-state.model';
import { UpdateStateAction } from '@entities/counter/store/actions/counter-actions';

const FetchCounterStoreHoc = <P extends object>(Component: ComponentType<P>) => {
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();

	useEffect(() => {
		(() => async () => {
			try {
				const state = await counterRepository.getState();
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
	}, [dispatch, db]);

	return (props: P) => {
		return <Component {...props} />;
	};
};

export default FetchCounterStoreHoc;
