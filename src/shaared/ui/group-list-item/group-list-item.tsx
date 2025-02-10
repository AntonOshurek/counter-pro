//NATIVE
import { Pressable, View } from 'react-native';
//LIBS
import { ScaleDecorator } from 'react-native-draggable-flatlist';
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

const GroupListItem = ({ item, drag, isActive }: GroupListItemProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();
	const theme = UseThemeResolver();
	const s = style(theme);

	const openGroup = () => {
		navigation.navigate(StackScreens.GroupScreen, { group: item });
	};

	return (
		<ScaleDecorator>
			<View style={s.groupListItem}>
				<Pressable onPress={openGroup}>
					<Paragraph contentType={'primary'} size={'large'}>
						{item.name}
					</Paragraph>
					<Paragraph contentType={'secondary'} size={'small'}>
						Counters: {item.counters.length}
					</Paragraph>
				</Pressable>
				<Pressable onLongPress={drag} disabled={isActive}>
					<Paragraph contentType={'secondary'} size={'small'}>
						==
					</Paragraph>
				</Pressable>
			</View>
		</ScaleDecorator>
	);
};

export default GroupListItem;
