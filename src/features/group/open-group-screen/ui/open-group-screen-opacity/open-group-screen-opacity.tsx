//NATIVE
import { TouchableOpacity } from 'react-native';
//FEATURES
import useOpenGroupScreen from '../../open-group-screen';
//MODEL
import type { OpenGroupScreenProps } from './open-group-screen-opacity.model';

const OpenGroupScreenOpacity = ({ group, children }: OpenGroupScreenProps) => {
	const openGroupScreen = useOpenGroupScreen({ group });

	return <TouchableOpacity onPress={openGroupScreen}>{children}</TouchableOpacity>;
};

export default OpenGroupScreenOpacity;
