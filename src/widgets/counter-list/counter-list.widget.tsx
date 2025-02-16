//NATIVE
import { FlatList } from 'react-native';
//FEATURES
import { MiniIncrementButton, MiniDecrementButton } from '../../features/counter';
//ENTITIES
import { CounterCard, CounterValue } from '../../entities/counter';
//STYLES
import style from './styles/style';

//MOK DATA
import counters from '../../mok-data/counters';

const CounterListWidget = () => {
	return (
		<FlatList
			style={style.counterList}
			data={counters}
			contentContainerStyle={{ rowGap: 20 }}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<CounterCard
					key={item.id}
					counter={item}
					DecrementButton={MiniDecrementButton}
					IncrementButton={MiniIncrementButton}
					CounterValue={CounterValue}
				/>
			)}
		/>
	);
};

export default CounterListWidget;
