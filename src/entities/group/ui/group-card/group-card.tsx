//NATIVE
import { Pressable, View } from 'react-native';
//NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationStackParams } from '../../../../app/navigation/model';
//HOOKS
import UseThemeResolver from '../../../../shaared/hooks/useThemeResolver';
//CONSTANTS
import { StackScreens } from '../../../../shaared/constants';
//UI
import Paragraph from '../../../../shaared/ui/paragraph/paragraph';
//MODEL
import { GroupCardProps } from './group-card.model';
//STYLES
import style from './style';

const GroupCard = ({ item }: GroupCardProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();
	const theme = UseThemeResolver();
	const s = style(theme);

	const openGroup = () => {
		navigation.navigate(StackScreens.GroupScreen, { group: item });
	};

	return (
		<View style={[s.groupCard]}>
			<Pressable style={s.linkToGroup} onPress={openGroup}>
				<Paragraph contentType={'primary'} size={'large'}>
					{item.name}
				</Paragraph>
				<Paragraph contentType={'tertiary'} size={'small'}>
					Counters: {item.counters.length}
				</Paragraph>
			</Pressable>
		</View>
	);
};

export default GroupCard;
