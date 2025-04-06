//NATIVE
import { FlatList } from 'react-native';
//MODEL
import { GroupCounterListProps } from './model/group-counter-list.model';
//STYLES
import style from './styles/style';
import { CounterCard, CounterValue } from '../../entities/counter';
import {
	MiniDecrementButton,
	MiniIncrementButton,
	OpenCounterScreenOpacity
} from '../../features/counter';

const GroupCounterListWidget = ({ groupCounters }: GroupCounterListProps) => {
	return (
		<FlatList
			style={style.GroupCounterList}
			data={groupCounters}
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
