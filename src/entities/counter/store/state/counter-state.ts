//MODEL
import type { Counter } from '../../model/counter.model';

const counterInitialState: Record<string, Counter> = {
	['counter-1']: {
		id: 'counter-1',
		name: 'Counter name 1',
		step: 1,
		count: 0,
		group: ''
	},
	['counter-2']: {
		id: 'counter-2',
		name: 'Counter name 2',
		step: 1,
		count: 0,
		group: ''
	}
};

export { counterInitialState };
