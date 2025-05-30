//NATIVE
import { FlatList, View } from 'react-native';
//STORE
import { useAppSelector } from '@shared/store';
import { SelectorGetCounters } from '@entities/counter';
//ENTITIES
import { Counter, CounterCard, CounterValue } from '@entities/counter';
import {
	Group,
	GroupCard,
	SelectorGetGroups,
	SelectorGetListSortType
} from '@entities/group';
//FEATURES
import { OpenGroupScreenOpacity, ChangePinnedGroupButton } from '@features/group';
import {
	MiniDecrementButton,
	MiniIncrementButton,
	OpenCounterScreenOpacity
} from '@features/counter';
//LIBS
import { sortCounters, sortGroups } from '@shared/lib/sort-lib';
import { convertObjectToArray } from '@shared/lib/convertObjectToArray';
//UI
import { ExpandAnimatedView, Paragraph } from '@shared/ui/';
//STYLES
import style from './styles/style';
//CONSTANTS
import { SortOptions } from '@shared/constants/sort';
import { GROUP_TEXT } from '@shared/text-content/text-content';

const GroupListWidget = () => {
	const sortType = useAppSelector(SelectorGetListSortType());
	const counters = useAppSelector(SelectorGetCounters());
	const groups = convertObjectToArray<Group>(useAppSelector(SelectorGetGroups()));
	const sortedGroups = sortGroups(sortType, groups);

	const groupCounters = (group: Group) => {
		const groupCounters = group.counters.flatMap(counterId => {
			const counter = counters[counterId];
			return counter ? [counter] : [];
		});

		if (groupCounters.length === 0) {
			return [];
		} else {
			return sortCounters(SortOptions.ByName, groupCounters);
		}
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
					{groupCounters(item).length ? (
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
					) : (
						<View style={style.withoutCounters}>
							<Paragraph contentType={'tertiary'} size={'xSmall'}>
								{GROUP_TEXT.groupIsEmptyOpenToAdd}
							</Paragraph>
						</View>
					)}
				</GroupCard>
			)}
		/>
	);
};

export default GroupListWidget;
