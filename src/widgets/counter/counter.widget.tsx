import { useState } from 'react';
//NATIVE
import { TouchableOpacity, View } from 'react-native';
//FEATURES
import { DecrementButton } from '../../features/create-new-counter/counter-controls';
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
				<Count count={count} />
			</TouchableOpacity>

			<CounterControlsWrapper>
				<DecrementButton decrement={onDecrement} />
			</CounterControlsWrapper>
		</View>
	);
};

export default CounterWidget;
