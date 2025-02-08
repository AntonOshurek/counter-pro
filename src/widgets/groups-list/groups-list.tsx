//NATIVE
import { FlatList, View } from 'react-native';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
//UI
import { GroupListItem } from '../';
//STYLES
import style from './styles/style';

//MOK DATA
import groups from '../../mok-data/groups';

const GroupsList = () => {
	const theme = UseThemeResolver();
	const s = style(theme);

	return (
		<FlatList
			style={s.groupsList}
			data={groups}
			keyExtractor={item => item.id}
			renderItem={({ item }) => <GroupListItem group={item} />}
			contentContainerStyle={{ gap: 20, paddingBottom: 100 }}
		/>
	);
};

export default GroupsList;
