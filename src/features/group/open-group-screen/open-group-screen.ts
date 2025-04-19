//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '@shared/types/navigation';
//MODEL
import type { openGroupScreenProps } from './model/open-group-screen.model';
//CONSTANTS
import { StackScreens } from '@shared/constants';

const useOpenGroupScreen = ({ groupId }: openGroupScreenProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();

	return () => {
		navigation.navigate(StackScreens.GroupScreen, { groupId });
	};
};

export default useOpenGroupScreen;
