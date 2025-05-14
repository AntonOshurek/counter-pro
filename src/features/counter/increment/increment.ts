//NATIVE
import { Vibration } from 'react-native';
//ENTITIES
import {
	IncrementAction,
	SelectorGetCounterStep,
	SelectorGetVibrationOnClick
} from '@entities/counter';
//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch, useAppSelector } from '@shared/store';
//MODEL
import type { UseIncrementProps } from './model/increment.model';
//CONSTANTS
import { VIBRATION_DURATION_ON_COUNTER_CLICK } from '@shared/constants';

const useIncrement = ({ counterId }: UseIncrementProps) => {
	const dispatch = useAppDispatch();
	const vibrationOnClick = useAppSelector(SelectorGetVibrationOnClick());
	const step = useAppSelector(SelectorGetCounterStep(counterId));
	const db = useSQLiteContext();

	return () => {
		vibrationOnClick && Vibration.vibrate(VIBRATION_DURATION_ON_COUNTER_CLICK);
		dispatch(IncrementAction({ counterId, amount: step }, db));
	};
};

export default useIncrement;
