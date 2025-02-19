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

export { ISelectorGetCounter, ISelectorGetCounters };
