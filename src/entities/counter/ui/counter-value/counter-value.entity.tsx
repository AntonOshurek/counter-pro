//MODEL
import { CounterValueProps } from './model/counter-value.model';
//UI
import Count from '../../../../shared/ui/count/count';

const CounterValue = ({ counterId, size }: CounterValueProps) => {
	return <Count count={1} size={size} />;
};

export default CounterValue;
