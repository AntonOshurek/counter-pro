//STORE
import { RootState } from '../../../../shared/store';
//MODEL
import { Counter } from '../../model/counter.model';

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

export {
	ISelectorGetCounter,
	ISelectorGetCounters,
	ISelectorGetCounterName,
	ISelectorGetCounterStep,
	ISelectorGetCounterCreatedDate
};
