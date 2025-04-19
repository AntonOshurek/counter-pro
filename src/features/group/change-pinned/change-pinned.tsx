//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import { setIsPinnedAction } from '@entities/group';
//MODEL
import { UseChangePinnedProps } from './model/change-pinned.model';

const useChangePinned = ({ groupId }: UseChangePinnedProps) => {
	const dispatch = useAppDispatch();

	return (isPinned: boolean) => {
		dispatch(setIsPinnedAction({ isPinned, groupId: groupId }));
	};
};

export default useChangePinned;
