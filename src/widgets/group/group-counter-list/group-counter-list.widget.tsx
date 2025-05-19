//NATIVE
import { FlatList, View } from 'react-native';
//STORE
import { useAppSelector } from '@shared/store';
//ENTITIES
import { CounterCard, CounterValue, SelectorGetCounters } from '@entities/counter';
import { SelectorGetGroup } from '@entities/group';
//FEATURES
import {
	MiniDecrementButton,
	MiniIncrementButton,
	OpenCounterScreenOpacity
} from '@features/counter';
//LIBS
import { sortCounters } from '@shared/lib/sort-lib';
//UI
import { Paragraph } from '@shared/ui';
//CONSTANTS
import { SortOptions } from '@shared/constants/sort';
import { GROUP_TEXT } from '@shared/text-content/text-content';
//MODEL
import type { GroupCounterListProps } from './model/group-counter-list.model';
//STYLES
import style from './styles/style';

const GroupCounterListWidget = ({ groupId }: GroupCounterListProps) => {
	const group = useAppSelector(SelectorGetGroup(groupId));
	const counters = useAppSelector(SelectorGetCounters());

	const groupCounters = group.counters.flatMap(counterId => {
		const counter = counters[counterId];
		return counter ? [counter] : [];
	});

	const sortedGroupCounters =
		groupCounters.length === 0 ? [] : sortCounters(SortOptions.ByName, groupCounters);

	return sortedGroupCounters.length ? (
		<FlatList
			style={style.GroupCounterList}
			data={sortedGroupCounters}
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
	) : (
		<View style={style.withoutCounters}>
			<Paragraph contentType={'tertiary'} size={'xSmall'}>
				{GROUP_TEXT.groupIsEmptyClickOnPlusBtnToAddOne}
			</Paragraph>
		</View>
	);
};

export default GroupCounterListWidget;
