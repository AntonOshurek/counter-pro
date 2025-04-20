//ABSTRACT
import { AbstractRepository } from '@shared/services';
//TYPES
import type { ICounterState } from '../model/counter-state.model';
//STATE
import { counterInitialState } from '../state/counter-state';
//LIBS
import { omitKey } from '@shared/lib/object-lib';

class CounterRepository extends AbstractRepository<Omit<ICounterState, 'counters'>> {
	constructor() {
		super(omitKey('counters', counterInitialState), 'counter-store');
	}
}

const counterRepository = new CounterRepository();

export default counterRepository;
