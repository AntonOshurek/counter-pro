//NATIVE
import { FlatList } from 'react-native';
//STORE
import { useAppSelector } from '../../shared/store';
//ENTITIES
import { CounterCard, CounterValue, SelectorGetCounters } from '../../entities/counter';
import { Group, SelectorGetGroup } from '../../entities/group';
//FEATURES
import {
	MiniDecrementButton,
	MiniIncrementButton,
	OpenCounterScreenOpacity
} from '../../features/counter';
//LIBS
import { sortCounters } from '../../shared/lib/sort-lib';
//CONSTANTS
import { SortOptions } from '../../shared/constants/sort';
//MODEL
import { GroupCounterListProps } from './model/group-counter-list.model';
//STYLES
import style from './styles/style';

const GroupCounterListWidget = ({ groupId }: GroupCounterListProps) => {
	const group = useAppSelector(SelectorGetGroup(groupId));
	const counters = useAppSelector(SelectorGetCounters());

	const groupCounters = (group: Group) => {
		let groupCounters = group.counters.map(counterId => {
			return counters[counterId];
		});
		return sortCounters(SortOptions.ByName, groupCounters);
	};

	return (
		<FlatList
			style={style.GroupCounterList}
			data={groupCounters(group)}
			contentContainerStyle={{ rowGap: 5, paddingBottom: 150 }}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<CounterCard
					key={item.id}
					counter={item}
					DecrementButton={MiniDecrementButton}
					IncrementButton={MiniIncrementButton}
					CounterValue={CounterValue}
					OpenCounter={OpenCounterScreenOpacity}
				/>
			)}
		/>
	);
};

export default GroupCounterListWidget;
