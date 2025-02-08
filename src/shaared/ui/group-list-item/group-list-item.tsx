//NATIVE
import { Pressable, View } from 'react-native';
//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
	NavigationStackParams,
	StackParams
} from '../../../app/navigation/model/stack.model';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//UI
import { Paragraph } from '../';
//MODEL
import type { IGroupListItemProps } from './model/group-list-item.model';
//STYLES
import style from './styles/style';

const GroupListItem = ({ group }: IGroupListItemProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();
	const theme = UseThemeResolver();
	const s = style(theme);

	const openGroup = () => {
		navigation.navigate(StackParams.GroupScreen, { groupId: group.id });
	};

	return (
		<View style={s.groupListItem}>
			<Pressable onPress={openGroup}>
				<Paragraph contentType={'primary'} size={'large'}>
					{group.name}
				</Paragraph>
				<Paragraph contentType={'secondary'} size={'medium'}>
					Counters: {group.counters.length}
				</Paragraph>
			</Pressable>
		</View>
	);
};

export default GroupListItem;
