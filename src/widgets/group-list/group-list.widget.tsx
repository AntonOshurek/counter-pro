//NATIVE
import { FlatList } from 'react-native';
//ENTITIES
import { Counter, CounterCard, CounterValue } from '../../entities/counter';
import { Group, GroupCard } from '../../entities/group';
//FEATURES
import { OpenGroupScreenOpacity } from '../../features/group';
import {
	MiniDecrementButton,
	MiniIncrementButton,
	OpenCounterScreenOpacity
} from '../../features/counter';
//UI
import ExpandAnimatedView from '../../shared/ui/expand-animated-view/expand-animated-view';
//STYLES
import style from './styles/style';

//MOK DATA
import groups from '../../mok-data/groups';
import counters from '../../mok-data/counters';

const GroupListWidget = () => {
	const groupCounter = (group: Group) => {
		return counters.filter(counter => {
			if (group.counters.includes(counter.id)) {
				return counter;
			}
		});
	};

	return (
		<FlatList
			style={style.groupList}
			data={groups}
			contentContainerStyle={{ rowGap: 5, paddingBottom: 150 }}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<GroupCard
					group={item}
					key={item.id}
					OpenGroupScreenOpacity={OpenGroupScreenOpacity}
				>
					<ExpandAnimatedView itemsCount={groupCounter(item).length}>
						{groupCounter(item).map((counter: Counter) => (
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
