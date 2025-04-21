//STORE
import { useAppDispatch } from '@shared/store';
//ENTITIES
import { setVibrationOnCounterClickAction } from '@entities/counter';
//MODEL
import { ChangeVibrationProps } from './model/change-vibration.model';

const useChangeVibration = () => {
	const dispatch = useAppDispatch();

	return ({ vibration }: ChangeVibrationProps) => {
		dispatch(setVibrationOnCounterClickAction({ vibration }));
	};
};

export default useChangeVibration;
