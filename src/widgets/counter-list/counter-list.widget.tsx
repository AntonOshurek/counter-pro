//NATIVE
import { FlatList } from 'react-native';
//STORE
import { useAppSelector } from '@shared/store';
//FEATURES
import {
	MiniIncrementButton,
	MiniDecrementButton,
	OpenCounterScreenOpacity
} from '@features/counter';
//ENTITIES
import {
	Counter,
	CounterCard,
	CounterValue,
	SelectorGetListSortType,
	SelectorGetCounters
} from '@entities/counter';
//LIBS
import { convertObjectToArray } from '@shared/lib/convertObjectToArray';
import { sortCounters } from '@shared/lib/sort-lib';
//STYLES
import style from './styles/style';

const CounterListWidget = () => {
	const sortType = useAppSelector(SelectorGetListSortType());
	const counters = convertObjectToArray<Counter>(useAppSelector(SelectorGetCounters()));
	const sortedCounters = sortCounters(sortType, counters);

	return (
		<FlatList
			style={style.counterList}
			data={sortedCounters}
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

export default CounterListWidget;
