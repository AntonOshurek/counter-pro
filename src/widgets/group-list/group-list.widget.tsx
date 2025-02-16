//NATIVE
import { FlatList } from 'react-native';
//FEATURES
import { GroupCard } from '../../entities/group';
//FEATURES
import { OpenGroupScreenOpacity } from '../../features/group';
//STYLES
import style from './styles/style';

//MOK DATA
import groups from '../../mok-data/groups';

const GroupListWidget = () => {
	return (
		<FlatList
			style={style.groupList}
			data={groups}
			contentContainerStyle={{ rowGap: 20, paddingBottom: 150 }}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<GroupCard
					group={item}
					key={item.id}
					OpenGroupScreenOpacity={OpenGroupScreenOpacity}
				/>
			)}
		/>
	);
};

export default GroupListWidget;
