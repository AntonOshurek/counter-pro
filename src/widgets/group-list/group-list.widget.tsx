//NATIVE
import { FlatList, View } from 'react-native';
//FEATURES
import { GroupCard } from '../../entities/group';
//STYLES
import style from './styles/style';

//MOK DATA
import groups from '../../mok-data/groups';

const GroupListWidget = () => {
	return (
		// <View style={style.groups}>
		<FlatList
			style={style.groupList}
			data={groups}
			keyExtractor={item => item.id}
			renderItem={({ item }) => <GroupCard group={item} key={item.id} />}
		/>
		// </View>
	);
};

export default GroupListWidget;
