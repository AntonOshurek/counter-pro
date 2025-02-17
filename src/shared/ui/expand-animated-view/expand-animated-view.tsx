import { useState, useRef } from 'react';
//NATIVE
import { Animated, TouchableOpacity, View } from 'react-native';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//UI
import Paragraph from '../paragraph/paragraph';
//MODEL
import { ExpandAnimatedViewProps } from './model/expand-animated-view.model';
//STYLES
import style from './styles/style';

const ExpandAnimatedView = ({ itemsCount, children }: ExpandAnimatedViewProps) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const animation = useRef(new Animated.Value(0)).current;

	const theme = UseThemeResolver();
	const s = style(theme);

	const toggleExpand = () => {
		Animated.timing(animation, {
			toValue: isExpanded ? 0 : 1,
			duration: 200,
			useNativeDriver: false
		}).start();
		setIsExpanded(!isExpanded);
	};

	const heightInterpolation = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [0, itemsCount * 30]
	});

	return (
		<View style={s.expandAnimatedView}>
			<TouchableOpacity style={s.dropDown} onPress={toggleExpand}>
				<Paragraph contentType={'primary'} size={'medium'}>
					{isExpanded ? 'Up' : 'Down'}
				</Paragraph>
			</TouchableOpacity>

			<Animated.View style={{ height: heightInterpolation, overflow: 'hidden' }}>
				{children}
			</Animated.View>
		</View>
	);
};

export default ExpandAnimatedView;
