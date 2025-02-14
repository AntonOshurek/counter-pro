import Count from '../../../../shared/ui/count/count';

interface Props {
	count: number;
}

const CounterValueEntity = ({ count }: Props) => {
	return <Count count={count} />;
};

export default CounterValueEntity;
