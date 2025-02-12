import { useState } from 'react';
//NATIVE
import { TouchableOpacity, View } from 'react-native';
//UI
import Count from '../../shaared/ui/count/count';
//STYLES
import style from './styles/style';

const CounterWidget = () => {
	const [count, setCount] = useState<number>(0);

	const onCountIncrement = () => {
		setCount(prev => prev + 1);
	};

	return (
		<View style={style.counterWidget}>
			<TouchableOpacity onPress={onCountIncrement} style={style.touchable} activeOpacity={1}>
				<Count count={count} />

				{/*<View>*/}
				{/*	<Text>counter controls</Text>*/}
				{/*</View>*/}
			</TouchableOpacity>
		</View>
	);
};

export default CounterWidget;
