//NATIVE
import { FlatList } from 'react-native';
//UI
import Paragraph from '../../shared/ui/paragraph/paragraph';
//STYLES
import style from './styles/style';

//MOK DATA
import counters from '../../mok-data/counters';

const CounterListWidget = () => {
	return (
		<FlatList
			style={style.counterList}
			data={counters}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<Paragraph size={'medium'} contentType={'primary'} key={item.id}>
					{item.id}
				</Paragraph>
			)}
		/>
	);
};

export default CounterListWidget;
