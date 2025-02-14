//NATIVE
import { FlatList, View } from 'react-native';
//FEATURES
import { GroupCard } from '../../entities/group';
//STYLES
import style from './styles/style';

//MOK DATA
import groups from '../../mok-data/groups';

const GroupsWidget = () => {
	return (
		<View style={style.groups}>
      <FlatList
        style={style.groupsList}
        data={groups}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GroupCard item={item} key={item.id} />}
      />
		</View>
	);
};

export default GroupsWidget;
