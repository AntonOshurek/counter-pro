//STORE
import { useAppSelector } from '@shared/store';
//FEATURES
import useSortTypeSelector from '../../sort-type-selector';
//ENTITIES
import { SelectorGetListSortType } from '@entities/group/';
//VARIABLES
import { counterSortOptions, SortOptions } from '@shared/constants/sort';
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
			options={counterSortOptions}
			currentOption={sortType}
			onOptionListener={onSortTypeChange}
		/>
	);
};

export default SortTypeSelectorHeaderButton;
