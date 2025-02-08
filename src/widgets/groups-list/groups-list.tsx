//NATIVE
import { FlatList, Text, View } from 'react-native';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
//UI
import { Paragraph } from '../../shaared/ui';
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
          <Paragraph contentType={'primary'} size={'large'} >{item.name}</Paragraph>
          <Paragraph contentType={'secondary'} size={'medium'}>Counters: {item.counters.length}</Paragraph>
        </View>
      )}
      contentContainerStyle={{ gap: 100, paddingBottom: 50 }}
    />
  )
}

export default GroupsList;
