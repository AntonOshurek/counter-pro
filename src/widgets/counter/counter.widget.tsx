import { useState } from 'react';
//NATIVE
import { View } from 'react-native';
//ENTITIES
import { CounterValueEntity } from '../../entities/counter/';
//FEATURES
import { DecrementButton, IncrementSurface } from '../../features/counter';
//UI
import { CounterControlsWrapper } from '../../shared/wrappers';
//STYLES
import style from './styles/style';

const CounterWidget = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<View style={style.counterWidget}>
			<IncrementSurface counterId={'some-counter-id'}>
				<CounterValueEntity count={count} />
			</IncrementSurface>

			<CounterControlsWrapper>
				<DecrementButton counterId={'some-counter-id'} />
			</CounterControlsWrapper>
		</View>
	);
};

export default CounterWidget;
