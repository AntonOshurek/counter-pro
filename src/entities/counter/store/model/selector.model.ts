//STORE
import { RootState } from '../../../../shared/store';
//MODEL
import { Counter } from '../../model/counter.model';
import { SortOptions } from '../../../../shared/constants/sort';
import { SelectorGetCountersByIds } from '../selectors/counter-selectors';

interface ISelectorGetCounter {
	(counterId: string): (state: RootState) => Counter;
}

interface ISelectorGetCounters {
	(): (state: RootState) => Record<string, Counter>;
}

interface ISelectorGetCounterName {
	(counterId: string): (state: RootState) => string;
}

interface ISelectorGetCounterStep {
	(counterId: string): (state: RootState) => number;
}

interface ISelectorGetCounterCreatedDate {
	(counterId: string): (state: RootState) => string;
}

interface ISelectorGetListSortType {
	(): (state: RootState) => SortOptions;
}

interface ISelectorGetIsPinned {
	(counterId: string): (state: RootState) => boolean;
}

interface ISelectorGetCountersByIds {
	(countersIds: string[]): (state: RootState) => Counter[];
}

export {
	ISelectorGetCounter,
	ISelectorGetCounters,
	ISelectorGetCounterName,
	ISelectorGetCounterStep,
	ISelectorGetCounterCreatedDate,
	ISelectorGetListSortType,
	ISelectorGetIsPinned,
	ISelectorGetCountersByIds
};
