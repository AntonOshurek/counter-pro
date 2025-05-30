import { useState, useRef } from 'react';
//NATIVE
import { Animated, TouchableOpacity, View } from 'react-native';
//HOOKS
import UseThemeResolver from '../../hooks/useThemeResolver';
//UI
import Paragraph from '../paragraph/paragraph';
import { ExpandIcon, CollapseIcon } from '../../icons';
//MODEL
import { ExpandAnimatedViewProps } from './model/expand-animated-view.model';
//STYLES
import style from './styles/style';

const ExpandAnimatedView = ({ itemsCount, children }: ExpandAnimatedViewProps) => {
	// const CLOSED_GROUP = 0;
	// const OPENED_GROUP = 1;

	const [isExpanded, setIsExpanded] = useState(false);
	// const animation = useRef(new Animated.Value(CLOSED_GROUP)).current;

	const theme = UseThemeResolver();
	const s = style(theme);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	// const toggleExpand = () => {
	// 	Animated.timing(animation, {
	// 		toValue: isExpanded ? CLOSED_GROUP : OPENED_GROUP,
	// 		duration: 100,
	// 		useNativeDriver: false
	// 	}).start();
	// 	setIsExpanded(!isExpanded);
	// };

	// const heightInterpolation = animation.interpolate({
	// 	inputRange: [0, 1],
	// 	outputRange: [0, itemsCount * 150]
	// });

	return (
		<View>
			<TouchableOpacity style={s.dropDown} onPress={toggleExpand}>
				<Paragraph contentType={'primary'} size={'medium'}>
					{isExpanded ? <CollapseIcon /> : <ExpandIcon />}
				</Paragraph>
			</TouchableOpacity>

			{/*<Animated.View style={{ height: heightInterpolation, overflow: 'hidden' }}>*/}
			{/*	{children}*/}
			{/*</Animated.View>*/}

			{isExpanded && <View style={{ gap: 5 }}>{children}</View>}
		</View>
	);
};

export default ExpandAnimatedView;
