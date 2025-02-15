//NATIVE
import { View } from 'react-native';
//MODEL
import type { CounterControlsProps } from './model/counter-controls.model';
//STYLES
import style from './styles/style';

const CounterControlsWrapper = ({ children }: CounterControlsProps) => {
	return <View style={style.counterControls}>{children}</View>;
};

export default CounterControlsWrapper;
