import { useState } from 'react';
//NATIVE
import { TouchableOpacity, View } from 'react-native';
//ENTITIES
import { CounterValueEntity } from '../../entities/counter/ui';
//FEATURES
import { DecrementButton } from '../../features/';
//UI
import Count from '../../shaared/ui/count/count';
import { CounterControlsWrapper } from '../../shaared/wrappers';
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
			<TouchableOpacity
				onPress={onCountIncrement}
				style={style.touchable}
				activeOpacity={1}
			>
				<CounterValueEntity count={count} />
			</TouchableOpacity>

			<CounterControlsWrapper>
				<DecrementButton decrement={onDecrement} />
			</CounterControlsWrapper>
		</View>
	);
};

export default CounterWidget;
