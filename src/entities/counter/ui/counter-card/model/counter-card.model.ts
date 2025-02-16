import React from 'react';
//TYPES
import type { Counter } from '../../../model/counter.model';

interface CounterCardProps {
	counter: Counter;
  IncrementButton: React.ComponentType<{ counterId: string }>;
  DecrementButton: React.ComponentType<{ counterId: string }>;
}

export { CounterCardProps };
