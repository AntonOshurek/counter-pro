//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import { setIsPinnedAction } from '@entities/group';
//MODEL
import { UseChangePinnedProps } from './model/change-pinned.model';

const useChangePinned = ({ groupId }: UseChangePinnedProps) => {
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();

	return (isPinned: boolean) => {
		dispatch(setIsPinnedAction({ isPinned, groupId: groupId }, db));
	};
};

export default useChangePinned;
