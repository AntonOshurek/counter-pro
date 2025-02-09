//NATIVE
import { Pressable, View } from 'react-native';
//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../../app/navigation/model/';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//CONSTANTS
import { StackScreens } from '../../constants';
//UI
import Paragraph from '../paragraph/paragraph';
//MODEL
import type { GroupListItemProps } from './model/group-list-item.model';
//STYLES
import style from './styles/style';

const GroupListItem = ({ group }: GroupListItemProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();
	const theme = UseThemeResolver();
	const s = style(theme);

	const openGroup = () => {
		navigation.navigate(StackScreens.GroupScreen, { group: group });
	};

	return (
		<View style={s.groupListItem}>
			<Pressable onPress={openGroup}>
				<Paragraph contentType={'primary'} size={'large'}>
					{group.name}
				</Paragraph>
				<Paragraph contentType={'secondary'} size={'small'}>
					Counters: {group.counters.length}
				</Paragraph>
			</Pressable>
		</View>
	);
};

export default GroupListItem;
