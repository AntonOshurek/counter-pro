//NATIVE
import { View } from 'react-native';
//FEATURES
import { CreateNewGroup } from '../../features';
//STYLES
import style from './style/style';

const GroupsScreenControlsWidget = () => {
	return (
		<View style={style.groupsScreenControlsWidget}>
			<CreateNewGroup />
		</View>
	);
};

export default GroupsScreenControlsWidget;
