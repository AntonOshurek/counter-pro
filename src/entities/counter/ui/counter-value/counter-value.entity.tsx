//MODEL
import { CounterValueProps } from './counter-value.model';
//UI
import Count from '../../../../shared/ui/count/count';

const CounterValue = ({ counterId }: CounterValueProps) => {
	return <Count count={1} />;
};

export default CounterValue;
