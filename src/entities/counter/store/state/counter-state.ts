//LIBS
import uuid from 'uuid';
//MODEL
import type { Counter } from '../../model/counter.model';

const counterInitialState: Counter[] = [
	{
		id: uuid.v6(),
		name: 'Counter name 1',
		step: 1,
		count: 0,
		group: ''
	},
  {
    id: uuid.v6(),
    name: 'Counter name 2',
    step: 1,
    count: 0,
    group: ''
  }
];

export { counterInitialState };
