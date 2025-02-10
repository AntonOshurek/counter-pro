import { useEffect, useState } from 'react';
//LIBS
import DraggableFlatList from 'react-native-draggable-flatlist';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
//UI
import GroupListItem from '../../shaared/ui/group-list-item/group-list-item';
//STYLES
import style from './styles/style';

//MOK DATA
import groups from '../../mok-data/groups';

const GroupsList = () => {
  const theme = UseThemeResolver();
  const s = style(theme);

  const [data, setData] = useState(groups);

  useEffect(() => {
    console.log('change data');
  }, [data]);

  return (
    <DraggableFlatList
      style={s.groupsList}
      contentContainerStyle={{ gap: 20, paddingBottom: 100 }}
      data={data}
      keyExtractor={item => item.id}
      onDragEnd={({ data }) => setData(data)}
      renderItem={GroupListItem}
    />
  );
};

export default GroupsList;
