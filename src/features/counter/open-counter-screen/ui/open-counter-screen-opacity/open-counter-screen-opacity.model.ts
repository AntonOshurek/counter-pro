import { ReactNode } from 'react';
//ENTITIES
import { Counter } from '../../../../../entities/counter';

interface OpenCounterScreenProps {
	counter: Counter;
	children: ReactNode;
}

export { OpenCounterScreenProps };
