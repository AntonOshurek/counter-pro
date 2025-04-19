//NATIVE
import { TouchableOpacity } from 'react-native';
//FEATURES
import useOpenCounterScreen from '../../open-counter-screen';
//MODEL
import type { OpenCounterScreenProps } from './model/open-counter-screen-opacity.model';

const OpenCounterScreenOpacity = ({
	counterId,
	children,
	additionalClass
}: OpenCounterScreenProps) => {
	const openCounterScreen = useOpenCounterScreen({ counterId });

	return (
		<TouchableOpacity style={additionalClass} onPress={openCounterScreen}>
			{children}
		</TouchableOpacity>
	);
};

export default OpenCounterScreenOpacity;
