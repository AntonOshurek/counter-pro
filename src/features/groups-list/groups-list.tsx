//NATIVE
import { FlatList } from 'react-native';
//UI
import { GroupCard } from '../../entities/group';
//STYLES
import style from './styles/style';

//MOK DATA
import groups from '../../mok-data/groups';

const GroupsList = () => {
	return (
		<FlatList
			style={style.groupsList}
			data={groups}
			keyExtractor={item => item.id}
			renderItem={({ item }) => <GroupCard item={item} key={item.id} />}
		/>
	);
};

export default GroupsList;
