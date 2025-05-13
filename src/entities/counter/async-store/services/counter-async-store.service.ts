//ABSTRACT
import { AbstractAsyncStoreService } from '@shared/services';
//STATE
import { counterInitialState } from '../../store/state/counter-state';
//TYPES
import type { ICounterState } from '../../store/model/counter-state.model';
//LIBS
import { omitKey } from '@shared/lib/object-lib';
//CONSTANTS
import { COUNTER_STORE_NAME } from '@shared/constants';

class CounterAsyncStoreService extends AbstractAsyncStoreService<
	Omit<ICounterState, 'counters'>
> {
	constructor() {
		super(omitKey('counters', counterInitialState), COUNTER_STORE_NAME);
	}
}

const counterAsyncStoreService = new CounterAsyncStoreService();

export default counterAsyncStoreService;
