//MODEL
import type { Counter } from '../../model/counter.model';

const counterInitialState: Record<string, Counter> = {
	['counter-1']: {
		id: 'counter-1',
		name: 'Counter name 1',
		step: 1,
		count: 0,
		group: 'g-1'
	},
	['counter-2']: {
		id: 'counter-2',
		name: 'Counter name 2',
		step: 1,
		count: 0,
		group: 'g-1'
	},
	['counter-3']: {
		id: 'counter-3',
		name: 'Counter name 2',
		step: 1,
		count: 0,
		group: 'g-1'
	},
	['counter-4']: {
		id: 'counter-4',
		name: 'Counter name 2',
		step: 1,
		count: 0,
		group: 'g-2'
	},
	['counter-5']: {
		id: 'counter-5',
		name: 'Counter name 2',
		step: 1,
		count: 0,
		group: 'g-2'
	},
	['counter-6']: {
		id: 'counter-6',
		name: 'Counter name 2',
		step: 1,
		count: 0,
		group: 'g-2'
	}
};

export { counterInitialState };
