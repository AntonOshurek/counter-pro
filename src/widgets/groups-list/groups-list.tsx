//NATIVE
import { FlatList, Text, View } from 'react-native';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
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
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={s.group}>
          <Text>{item.name}</Text>
          <Text>Counters: {item.counters.length}</Text>
        </View>
      )}
      contentContainerStyle={{ gap: 100, paddingBottom: 50 }}
    />
  )
}

export default GroupsList;
