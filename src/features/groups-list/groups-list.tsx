import { useEffect, useState } from 'react';
//LIBS
import DraggableFlatList from 'react-native-draggable-flatlist';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
//UI
import { GroupCard } from '../../entities/group';
//STYLES
import style from './styles/style';

//MOK DATA
import groups from '../../mok-data/groups';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';

const GroupsList = () => {
	const theme = UseThemeResolver();
	const s = style(theme);

	const [data, setData] = useState(groups);

	useEffect(() => {
		console.log('change groups items ordering');
	}, [data]);

	return (
		<FlatList
			data={data}
			keyExtractor={item => item.id}
		  renderItem={({ item }) => <GroupCard item={item} key={item.id} />}
		/>
		// <GestureHandlerRootView style={{ flex: 1 }}>
		// 	<DraggableFlatList
		// 		style={s.groupsList}
		// 		contentContainerStyle={{ paddingBottom: 100 }}
		// 		data={data}
		// 		keyExtractor={item => item.id}
		// 		onDragEnd={({ data }) => setData(data)}
		// 		renderItem={({ item, drag, isActive, getIndex }) => (
		// 			<GroupCard item={item} drag={drag} isActive={isActive} getIndex={getIndex} />
		// 		)}
		// 	/>
		// </GestureHandlerRootView>
	);
};

export default GroupsList;
