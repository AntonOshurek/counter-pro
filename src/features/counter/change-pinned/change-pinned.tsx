//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import { setIsPinnedAction } from '@entities/counter';
//MODEL
import type { UseChangePinnedProps } from './model/change-pinned.model';

const useChangePinned = ({ counterId }: UseChangePinnedProps) => {
	const dispatch = useAppDispatch();

	return (isPinned: boolean) => {
		dispatch(setIsPinnedAction({ isPinned, counterId: counterId }));
	};
};

export default useChangePinned;
