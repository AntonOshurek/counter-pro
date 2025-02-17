//NATIVE
import { View } from 'react-native';
//ENTITIES
import { Counter } from '../../../counter';
//UI
import Paragraph from '../../../../shared/ui/paragraph/paragraph';
import ExpandAnimatedView from '../../../../shared/ui/expand-animated-view/expand-animated-view';
//MODEL
import { GroupCardProps } from './group-card.model';
//STYLES
import style from './style';

//MOK DATA
import counters from '../../../../mok-data/counters';

const GroupCard = ({ group, OpenGroupScreenOpacity }: GroupCardProps) => {
	const groupCounter = counters.filter(counter => {
		if (group.counters.includes(counter.id)) {
			return counter;
		}
	});

	return (
		<View style={[style.groupCard]}>
			<View style={style.cardHeader}>
				<OpenGroupScreenOpacity group={group} additionalStyles={style.cardTitle}>
					<Paragraph contentType={'primary'} size={'large'}>
						{group.name}
					</Paragraph>
					<Paragraph contentType={'tertiary'} size={'xSmall'}>
						Counters: {group.counters.length}
					</Paragraph>
				</OpenGroupScreenOpacity>

				<Paragraph contentType={'secondary'} size={'large'}>
					Pinned
				</Paragraph>
			</View>

			<ExpandAnimatedView itemsCount={groupCounter.length}>
				{groupCounter.map((counter: Counter) => (
					<Paragraph contentType={'primary'} size={'small'} key={counter.id}>
						{counter.name}
					</Paragraph>
				))}
			</ExpandAnimatedView>
		</View>
	);
};

export default GroupCard;
