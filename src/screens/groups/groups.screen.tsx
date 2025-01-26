//NATIVE
import { View, Text } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//STYLES
import style from './styles/style';

const GroupsScreen = (): JSX.Element => {
	return (
		<ScreenLayout additionalClass={style.groupsScreen}>
			<View>
				<Text>List of groups</Text>
			</View>
		</ScreenLayout>
	);
};

export default GroupsScreen;
