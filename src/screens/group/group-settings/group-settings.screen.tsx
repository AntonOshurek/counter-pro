//NATIVE
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';
//NAVIGATION
import { GroupScreenRouteProp } from '@shared/types/navigation';
//LAYOUTS
import { ScreenLayout } from '@shared/layouts/';
//WIDGETS
import {
	GroupCriticalOptionsWidget,
	GroupAdditionalInfoWidget,
	GroupSettingsWidget
} from '@widgets/group';
//STORE
import { useAppSelector } from '@shared/store';
//ENTITIES
import { SelectorGetGroup } from '@entities/group';
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
				<GroupAdditionalInfoWidget group={group} />
				<GroupSettingsWidget group={group} />
			</View>
		</ScreenLayout>
	);
};

export default GroupSettingsScreen;
