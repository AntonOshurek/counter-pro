//DB
import { useSQLiteContext } from 'expo-sqlite';
//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import { ResetAction } from '@entities/counter/';
//MODEL
import type { ResetCounterProps } from './model/reset-counter.model';

const useResetCounter = ({ counterId }: ResetCounterProps) => {
	const dispatch = useAppDispatch();
	const db = useSQLiteContext();

	return () => {
		dispatch(ResetAction({ counterId }, db));
	};
};

export default useResetCounter;
