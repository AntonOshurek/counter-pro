//NATIVE
import { FlatList } from 'react-native';
//STORE
import { useAppSelector } from '../../shared/store';
import { SelectorGetCounters } from '../../entities/counter/store/selectors/counter-selectors';
//FEATURES
import {
	MiniIncrementButton,
	MiniDecrementButton,
	OpenCounterScreenOpacity
} from '../../features/counter';
//ENTITIES
import { Counter, CounterCard, CounterValue } from '../../entities/counter';
//LIBS
import { convertObjectToArray } from '../../shared/lib/convertObjectToArray';
//STYLES
import style from './styles/style';

const CounterListWidget = () => {
	const counters = convertObjectToArray<Counter>(useAppSelector(SelectorGetCounters()));

	return (
		<FlatList
			style={style.counterList}
			data={counters}
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
