//NATIVE
import { Vibration } from 'react-native';
//ENTITIES
import {
	DecrementAction,
	SelectorGetCounterStep,
	SelectorGetVibrationOnClick
} from '@entities/counter';
//STORE
import { useAppDispatch, useAppSelector } from '@shared/store';
//MODEL
import type { UseDecrementProps } from './model/decrement.model';
//CONSTANTS
import { VIBRATION_DURATION_ON_COUNTER_CLICK } from '@shared/constants';

const useDecrement = ({ counterId }: UseDecrementProps) => {
	const dispatch = useAppDispatch();
	const vibrationOnClick = useAppSelector(SelectorGetVibrationOnClick());
	const step = useAppSelector(SelectorGetCounterStep(counterId));

	return () => {
		vibrationOnClick && Vibration.vibrate(VIBRATION_DURATION_ON_COUNTER_CLICK);
		dispatch(DecrementAction({ counterId, amount: step }));
	};
};

export default useDecrement;
