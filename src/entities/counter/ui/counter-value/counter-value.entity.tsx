//STORE
import { useAppSelector } from '@shared/store';
import { SelectorGetCounter } from '../../store/selectors/counter.selectors';
//MODEL
import type { CounterValueProps } from './model/counter-value.model';
//UI
import { Count } from '@shared/ui';

const CounterValue = ({ counterId, size }: CounterValueProps) => {
	const counter = useAppSelector(SelectorGetCounter(counterId));

	return <Count count={counter.count} size={size} />;
};

export default CounterValue;
