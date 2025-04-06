//NATIVE
import { FlatList } from 'react-native';
//ENTITIES
import { CounterCard, CounterValue } from '../../entities/counter';
//FEATURES
import {
	MiniDecrementButton,
	MiniIncrementButton,
	OpenCounterScreenOpacity
} from '../../features/counter';
//MODEL
import { GroupCounterListProps } from './model/group-counter-list.model';
//STYLES
import style from './styles/style';

const GroupCounterListWidget = ({ groupCounters }: GroupCounterListProps) => {
	return (
		<FlatList
			style={style.GroupCounterList}
			data={groupCounters}
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
