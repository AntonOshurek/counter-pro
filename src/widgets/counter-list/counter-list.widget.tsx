//NATIVE
import { FlatList } from 'react-native';
//ENTITIES
import { CounterCard } from '../../entities/counter';
//STYLES
import style from './styles/style';

//MOK DATA
import counters from '../../mok-data/counters';

const CounterListWidget = () => {
	return (
		<FlatList
			style={style.counterList}
			data={counters}
      contentContainerStyle={{rowGap: 20}}
			keyExtractor={item => item.id}
			renderItem={({ item }) => <CounterCard counter={item} key={item.id} />}
		/>
	);
};

export default CounterListWidget;
