//NATIVE
import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
//NAVIGATION
import { GroupScreenRouteProp } from '../../app/navigation/model';
//LAYOUTS
import { ScreenLayout } from '../layouts';
//WIDGETS
import { GroupCriticalOptionsWidget } from '../../widgets';
//STORE
import { useAppSelector } from '../../shared/store';
//ENTITIES
import { SelectorGetGroup } from '../../entities/group';
//STYLES
import style from './styles/style';

const GroupSettingsScreen = () => {
	const route = useRoute<GroupScreenRouteProp>();
	const { groupId } = route.params || {};

	const group = useAppSelector(SelectorGetGroup(groupId));

	return (
		<ScreenLayout additionalClass={style.groupSettingsScreen}>
			<View style={style.settingsGroup}>
				<GroupCriticalOptionsWidget group={group} />
			</View>

			<View style={style.settingsGroup}>
				<Text>Other settings of group</Text>
			</View>
		</ScreenLayout>
	);
};

export default GroupSettingsScreen;
