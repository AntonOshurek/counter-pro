//NATIVE
import { View, TouchableOpacity, Animated } from 'react-native';
//HOOKS
import UseThemeResolver from '../../../../shared/hooks/useThemeResolver';
//UI
import Paragraph from '../../../../shared/ui/paragraph/paragraph';
//MODEL
import { GroupCardProps } from './group-card.model';
//STYLES
import style from './style';

//MOK DATA
import counters from '../../../../mok-data/counters';
import { Counter } from '../../../counter';
import { useRef, useState } from 'react';

const GroupCard = ({ group, OpenGroupScreenOpacity }: GroupCardProps) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const animation = useRef(new Animated.Value(0)).current;

	const theme = UseThemeResolver();
	const s = style(theme);

	const groupCounter = counters.filter(counter => {
		if (group.counters.includes(counter.id)) {
			return counter;
		}
	});

	const toggleExpand = () => {
		Animated.timing(animation, {
			toValue: isExpanded ? 0 : 1,
			duration: 300,
			useNativeDriver: false
		}).start();
		setIsExpanded(!isExpanded);
	};

	const heightInterpolation = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [0, group.counters.length * 30] // Высота элемента * кол-во элементов
	});

	return (
		<View style={[s.groupCard]}>
			<OpenGroupScreenOpacity group={group}>
				<Paragraph contentType={'primary'} size={'large'}>
					{group.name}
				</Paragraph>
				<Paragraph contentType={'tertiary'} size={'small'}>
					Counters: {group.counters.length}
				</Paragraph>
			</OpenGroupScreenOpacity>

			<TouchableOpacity style={s.dropDown} onPress={toggleExpand}>
				<Paragraph contentType={'primary'} size={'medium'}>
					Down
				</Paragraph>
			</TouchableOpacity>

			<Animated.View style={{ height: heightInterpolation, overflow: 'hidden' }}>
				{groupCounter.map((counter: Counter) => (
					<Paragraph contentType={'primary'} size={'small'} key={counter.id}>
						{counter.name}
					</Paragraph>
				))}
			</Animated.View>
		</View>
	);
};

export default GroupCard;
