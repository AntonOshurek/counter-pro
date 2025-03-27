//NATIVE
import { TouchableOpacity } from 'react-native';
//FEATURES
import useOpenGroupScreen from '../../open-group-screen';
//MODEL
import type { OpenGroupScreenProps } from './open-group-screen-opacity.model';

const OpenGroupScreenOpacity = ({
	groupId,
	children,
	additionalStyles
}: OpenGroupScreenProps) => {
	const openGroupScreen = useOpenGroupScreen({ groupId });

	return (
		<TouchableOpacity style={additionalStyles} onPress={openGroupScreen}>
			{children}
		</TouchableOpacity>
	);
};

export default OpenGroupScreenOpacity;
