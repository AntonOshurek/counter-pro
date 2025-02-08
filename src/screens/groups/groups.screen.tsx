//NATIVE
import { View, Text, FlatList } from 'react-native';
//LAYOUTS
import { ScreenLayout } from '../../layouts';
//WIDGETS
import { GroupsScreenControlsWidget } from '../../widgets';
//STYLES
import style from './styles/style';

//MOK DATA
import groups from '../../mok-data/groups';

const GroupsScreen = () => {
	return (
		<ScreenLayout additionalClass={style.groupsScreen}>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>Counters: {item.counters.length}</Text>
          </View>
        )}
      />

			<GroupsScreenControlsWidget />
		</ScreenLayout>
	);
};

export default GroupsScreen;
