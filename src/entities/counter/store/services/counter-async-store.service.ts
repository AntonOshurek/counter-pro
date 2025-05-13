//ABSTRACT
import { AbstractRepository } from '@shared/services';
//STATE
import { counterInitialState } from '../state/counter-state';
//TYPES
import type { ICounterState } from '../model/counter-state.model';
//LIBS
import { omitKey } from '@shared/lib/object-lib';
//CONSTANTS
import { COUNTER_STORE_NAME } from '@shared/constants';

class CounterAsyncStoreService extends AbstractRepository<
	Omit<ICounterState, 'counters'>
> {
	constructor() {
		super(omitKey('counters', counterInitialState), COUNTER_STORE_NAME);
	}
}

const counterRepository = new CounterAsyncStoreService();

export default counterRepository;
