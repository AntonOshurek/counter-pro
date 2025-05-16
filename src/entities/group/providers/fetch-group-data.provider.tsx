import { ReactNode, useEffect, useState } from 'react';
// STORE
import { useAppDispatch } from '@shared/store';
import { UpdateStateAction } from '../store/actions/group.actions';
// DB
import { useSQLiteContext } from 'expo-sqlite';
// SERVICES
import groupAsyncStoreService from '../async-store/services/group-async-store.service';
import groupSqliteService from '../db/services/group-sqlite.service';
// TYPES
import { IGroupState } from '../store/model/group-state.model';

interface Props {
	children: ReactNode;
}

const FetchGroupDataProvider = ({ children }: Props) => {
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const fetchGroupState = async () => {
			try {
				const asyncState = await groupAsyncStoreService.getState();
				const groupsFromDb = await groupSqliteService.getAll(db);

				if (asyncState instanceof Error) {
					console.error('Failed to load state:', asyncState.message);
					return;
				}

				const fullStore: IGroupState = {
					...asyncState,
					groups: { ...groupsFromDb }
				};

				dispatch(UpdateStateAction({ newState: fullStore }));
				setReady(true);
			} catch (error) {
				console.error('Unexpected error in fetchGroupState:', error);
			}
		};

		if (db) fetchGroupState();
	}, [db, dispatch]);

	if (!ready) return null;

	return <>{children}</>;
};

export default FetchGroupDataProvider;
