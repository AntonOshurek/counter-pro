//NATIVE
import { FlatList, View } from 'react-native';
//STORE
import { useAppSelector } from '../../shared/store';
import { SelectorGetCounters } from '../../entities/counter/';
//ENTITIES
import { Counter, CounterCard, CounterValue } from '../../entities/counter';
import { Group, GroupCard, SelectorGetGroups } from '../../entities/group';
//FEATURES
import { OpenGroupScreenOpacity, ChangePinnedGroupButton } from '../../features/group';
import {
	MiniDecrementButton,
	MiniIncrementButton,
	OpenCounterScreenOpacity
} from '../../features/counter';
//LIBS
import { sortCounters, sortGroups } from '../../shared/lib/sort-lib';
import { convertObjectToArray } from '../../shared/lib/convertObjectToArray';
//UI
import ExpandAnimatedView from '../../shared/ui/expand-animated-view/expand-animated-view';
//STYLES
import style from './styles/style';
//CONSTANTS
import { SortOptions } from '../../shared/constants/sort';

const GroupListWidget = () => {
	const counters = useAppSelector(SelectorGetCounters());
	const groups = convertObjectToArray<Group>(useAppSelector(SelectorGetGroups()));
	const sortedGroups = sortGroups(SortOptions.ByName, groups);

	const groupCounters = (group: Group) => {
		let groupCounters = group.counters.map(counterId => {
			return counters[counterId];
		});
		return sortCounters(SortOptions.ByName, groupCounters);
	};

	return (
		<FlatList
			style={style.groupList}
			data={sortedGroups}
			contentContainerStyle={{ rowGap: 5, paddingBottom: 150 }}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<GroupCard
					group={item}
					key={item.id}
					OpenGroupScreenOpacity={OpenGroupScreenOpacity}
					controls={<ChangePinnedGroupButton groupId={item.id} key={item.id} />}
				>
					<ExpandAnimatedView itemsCount={groupCounters(item).length}>
						{groupCounters(item).map((counter: Counter) => (
							<CounterCard
								key={counter.id}
								counter={counter}
								DecrementButton={MiniDecrementButton}
								IncrementButton={MiniIncrementButton}
								CounterValue={CounterValue}
								OpenCounter={OpenCounterScreenOpacity}
							/>
						))}
					</ExpandAnimatedView>
				</GroupCard>
			)}
		/>
	);
};

export default GroupListWidget;
