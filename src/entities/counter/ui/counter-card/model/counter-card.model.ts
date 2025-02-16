import React from 'react';
//MODEL
import type { Counter } from '../../../model/counter.model';
//TYPES
import { Sizes } from '../../../../../shared/types/styling';

interface CounterCardProps {
	counter: Counter;
	IncrementButton: React.ComponentType<{ counterId: string }>;
	DecrementButton: React.ComponentType<{ counterId: string }>;
	CounterValue: React.ComponentType<{ counterId: string; size?: Sizes }>;
}

export { CounterCardProps };
