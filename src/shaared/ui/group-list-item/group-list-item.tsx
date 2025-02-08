//NATIVE
import { View } from 'react-native';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//UI
import { Paragraph } from '../';
//MODEL
import type { IGroupListItemProps } from './model/group-list-item.model';
//STYLES
import style from './styles/style';

const GroupListItem = ({ group }: IGroupListItemProps) => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<View style={s.groupListItem}>
			<Paragraph contentType={'primary'} size={'large'}>
				{group.name}
			</Paragraph>
			<Paragraph contentType={'secondary'} size={'medium'}>
				Counters: {group.counters.length}
			</Paragraph>
		</View>
	);
};

export default GroupListItem;
