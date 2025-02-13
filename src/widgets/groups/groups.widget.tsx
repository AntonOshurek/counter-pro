//NATIVE
import { View } from 'react-native';
//FEATURES
import { GroupsList } from '../../features';
//STYLES
import style from './styles/style';

const GroupsWidget = () => {
	return (
		<View style={style.groups}>
			<GroupsList />
		</View>
	);
};

export default GroupsWidget;
