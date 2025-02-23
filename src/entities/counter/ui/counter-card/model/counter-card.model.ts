//NATIVE
import { StyleProp, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
//MODEL
import type { Counter } from '../../../model/counter.model';
//TYPES
import { Sizes } from '../../../../../shared/types/';

interface CounterCardProps {
	counter: Counter;
	IncrementButton: React.ComponentType<{ counterId: string }>;
	DecrementButton: React.ComponentType<{ counterId: string }>;
	CounterValue: React.ComponentType<{ counterId: string; size?: Sizes }>;
	OpenCounter: React.ComponentType<{
		counterId: string;
		children: ReactNode;
		additionalClass?: StyleProp<ViewStyle>;
	}>;
}

export { CounterCardProps };
