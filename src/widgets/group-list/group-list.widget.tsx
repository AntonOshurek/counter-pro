//NATIVE
import { FlatList } from 'react-native';
//STORE
import { useAppSelector } from '../../shared/store';
import { SelectorGetCounters } from '../../entities/counter/';
//ENTITIES
import { Counter, CounterCard, CounterValue } from '../../entities/counter';
import { Group, GroupCard } from '../../entities/group';
//FEATURES
import { OpenGroupScreenOpacity } from '../../features/group';
import {
	MiniDecrementButton,
	MiniIncrementButton,
	OpenCounterScreenOpacity
} from '../../features/counter';
//UI
import ExpandAnimatedView from '../../shared/ui/expand-animated-view/expand-animated-view';
//STYLES
import style from './styles/style';

//MOK DATA
import groups from '../../mok-data/groups';
import { sortCounters } from '../../shared/lib/sort-lib';
import { SortOptions } from '../../shared/constants/sort';

const GroupListWidget = () => {
	const counters = useAppSelector(SelectorGetCounters());

	const groupCounter = (group: Group) => {
		let groupCounters = Object.values(counters).filter(
			counter => counter.group === group.id
		);
		groupCounters = sortCounters(SortOptions.ByName, groupCounters);
		return groupCounters;
	};

	return (
		<FlatList
			style={style.groupList}
			data={groups}
			contentContainerStyle={{ rowGap: 5, paddingBottom: 150 }}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<GroupCard
					group={item}
					key={item.id}
					OpenGroupScreenOpacity={OpenGroupScreenOpacity}
				>
					{/*<ExpandAnimatedView itemsCount={groupCounter(item).length}>*/}
					{groupCounter(item).map((counter: Counter) => (
						<CounterCard
							key={counter.id}
							counter={counter}
							DecrementButton={MiniDecrementButton}
							IncrementButton={MiniIncrementButton}
							CounterValue={CounterValue}
							OpenCounter={OpenCounterScreenOpacity}
						/>
					))}
					{/*</ExpandAnimatedView>*/}
				</GroupCard>
			)}
		/>
	);
};

export default GroupListWidget;
