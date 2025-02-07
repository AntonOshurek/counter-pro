//NATIVE
import { View, Text } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//WIDGETS
import { GroupsScreenControlsWidget } from '../../widgets';
//STYLES
import style from './styles/style';

const GroupsScreen = () => {
	return (
		<ScreenLayout additionalClass={style.groupsScreen}>
			<View>
				<Text>List of groups</Text>
			</View>

			<GroupsScreenControlsWidget />
		</ScreenLayout>
	);
};

export default GroupsScreen;
