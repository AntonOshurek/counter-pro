//STORE
import { useAppSelector } from '../../../../../shared/store';
//FEATURES
import useSortTypeSelector from '../../sotrt-type-selector';
//ENTITIES
import { SelectorGetListSortType } from '../../../../../entities/counter/';
//VARIABLES
import { counterSortOptions, SortOptions } from '../../../../../shared/constants/sort';
//UI
import SortModalInHeader from '../../../../../shared/ui/sort-modal-in-header/sort-modal-in-header';

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
