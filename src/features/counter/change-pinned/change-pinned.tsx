//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import { setIsPinnedAction } from '@entities/counter';
//MODEL
import type { UseChangePinnedProps } from './model/change-pinned.model';

const useChangePinned = ({ counterId }: UseChangePinnedProps) => {
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();

	return (isPinned: boolean) => {
		dispatch(setIsPinnedAction({ isPinned, counterId: counterId }, db));
	};
};

export default useChangePinned;
