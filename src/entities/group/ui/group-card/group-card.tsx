//NATIVE
import { Pressable, TouchableOpacity, View } from 'react-native';
//LIBS
// import { ScaleDecorator } from 'react-native-draggable-flatlist';
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
//icons
// import { DragHandleIcon } from '../../../../shaared/icons';
//MODEL
import { GroupCardProps } from './group-card.model';
//STYLES
import style from './style';
// import { colors } from '../../../../shaared/styles';

const GroupCard = ({ item }: GroupCardProps) => {
	const navigation = useNavigation<NativeStackNavigationProp<NavigationStackParams>>();
	const theme = UseThemeResolver();
	const s = style(theme);

	const openGroup = () => {
		navigation.navigate(StackScreens.GroupScreen, { group: item });
	};

	return (
		// <View>
		<TouchableOpacity onPress={openGroup}>
			<View style={[s.groupCard]}>
				{/*<Pressable style={s.linkToGroup} onPress={openGroup}>*/}
				<Paragraph contentType={'primary'} size={'large'}>
					{item.name}
				</Paragraph>
				<Paragraph contentType={'tertiary'} size={'small'}>
					Counters: {item.counters.length}
				</Paragraph>
				{/*</Pressable>*/}

				{/*<Pressable onLongPress={drag} disabled={isActive}>*/}
				{/*	<DragHandleIcon*/}
				{/*		height={40}*/}
				{/*		width={40}*/}
				{/*		color={isActive ? colors[theme].textPrimary : colors[theme].textTertiary}*/}
				{/*	/>*/}
				{/*</Pressable>*/}
			</View>
		</TouchableOpacity>
	);
};

export default GroupCard;
