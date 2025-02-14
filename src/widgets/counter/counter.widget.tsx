import { useState } from 'react';
//NATIVE
import { View } from 'react-native';
//ENTITIES
import { CounterValueEntity } from '../../entities/counter/';
//FEATURES
import { DecrementButton, IncrementSurface } from '../../features/';
//UI
import { CounterControlsWrapper } from '../../shared/wrappers';
//STYLES
import style from './styles/style';

const CounterWidget = () => {
	const [count, setCount] = useState<number>(0);

	const onCountIncrement = () => {
		setCount(prev => prev + 1);
	};

	const onDecrement = () => {
		setCount(prev => prev - 1);
	};

	return (
		<View style={style.counterWidget}>
      <IncrementSurface count={count} increment={onCountIncrement}>
        <CounterValueEntity count={count} />
      </IncrementSurface>

			<CounterControlsWrapper>
				<DecrementButton decrement={onDecrement} />
			</CounterControlsWrapper>
		</View>
	);
};

export default CounterWidget;
