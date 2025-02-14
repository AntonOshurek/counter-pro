//NATIVE
import { View } from 'react-native';
//FEATURES
import { CreateNewGroupButton } from '../../features/group';
//STYLES
import style from './style/style';

const GroupsScreenControlsWidget = () => {
	return (
		<View style={style.groupsScreenControlsWidget}>
			<CreateNewGroupButton />
		</View>
	);
};

export default GroupsScreenControlsWidget;
