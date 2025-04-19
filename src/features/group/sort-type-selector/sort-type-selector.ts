//ENTITIES
import { setListSortTypeAction } from '@entities/group/';
//STORE
import { useAppDispatch } from '@shared/store';
//CONSTANTS
import { SortOptions } from '@shared/constants/sort';

const useSortTypeSelector = () => {
	const dispatch = useAppDispatch();

	return (sortType: SortOptions) => {
		dispatch(setListSortTypeAction({ sortType }));
	};
};

export default useSortTypeSelector;
