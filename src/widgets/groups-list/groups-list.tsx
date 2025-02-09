import { useState } from 'react';
//NATIVE
import { TouchableOpacity } from 'react-native';
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

	return (
		<DraggableFlatList
			style={s.groupsList}
			data={data}
			keyExtractor={item => item.id}
			contentContainerStyle={{ gap: 20, paddingBottom: 100 }}
			onDragEnd={({ data }) => {
				setData(data);
			}}
			renderItem={({ item, drag, isActive }) => (
				<TouchableOpacity
					activeOpacity={0.6}
					onLongPress={drag}
					disabled={isActive}
					key={item.id}
				>
					<GroupListItem group={item} />
				</TouchableOpacity>
			)}
		/>
	);
};

export default GroupsList;
