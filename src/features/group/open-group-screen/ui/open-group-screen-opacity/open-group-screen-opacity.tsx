//NATIVE
import { TouchableOpacity } from 'react-native';
//FEATURES
import useOpenGroupScreen from '../../open-group-screen';
//MODEL
import type { OpenGroupScreenProps } from './open-group-screen-opacity.model';

const OpenGroupScreenOpacity = ({
	group,
	children,
	additionalStyles
}: OpenGroupScreenProps) => {
	const openGroupScreen = useOpenGroupScreen({ group });

	return (
		<TouchableOpacity style={additionalStyles} onPress={openGroupScreen}>
			{children}
		</TouchableOpacity>
	);
};

export default OpenGroupScreenOpacity;
