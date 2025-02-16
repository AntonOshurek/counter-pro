//NATIVE
import { TouchableOpacity } from 'react-native';
//FEATURES
import useOpenCounterScreen from '../../open-counter-screen';
//MODEL
import type { OpenCounterScreenProps } from './open-counter-screen-opacity.model';

const OpenCounterScreenOpacity = ({ counter, children }: OpenCounterScreenProps) => {
	const openCounterScreen = useOpenCounterScreen({ counter });

	return <TouchableOpacity onPress={openCounterScreen}>{children}</TouchableOpacity>;
};

export default OpenCounterScreenOpacity;
