//STORE
import { useAppSelector } from '@shared/store';
//FEATURES
import useSortTypeSelector from '../../sotrt-type-selector';
//ENTITIES
import { SelectorGetListSortType } from '@entities/counter/';
//VARIABLES
import { SORT_OPTIONS, SortOptions } from '@shared/constants/';
//UI
import { SortModalInHeader } from '@shared/ui/';

const SortTypeSelectorHeaderButton = () => {
	const setListSortType = useSortTypeSelector();
	const sortType = useAppSelector(SelectorGetListSortType());

	const onSortTypeChange = (sortOption: SortOptions) => {
		setListSortType(sortOption);
	};

	return (
		<SortModalInHeader<SortOptions>
			options={SORT_OPTIONS}
			currentOption={sortType}
			onOptionListener={onSortTypeChange}
		/>
	);
};

export default SortTypeSelectorHeaderButton;
