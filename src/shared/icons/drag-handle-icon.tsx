//LIBS
import Svg, { Path } from 'react-native-svg';
//HOC
import withIconWrapper from '../HOC/withIconsWrapper';
//TYPES
import type { IconProps } from './model/icon.model';

const DragHandleIcon = (props: IconProps) => {
	return (
		<Svg viewBox='0 -960 960 960' {...props}>
			<Path d='M160-380v-66.67h640V-380H160Zm0-133.33V-580h640v66.67H160Z' />
		</Svg>
	);
};

export default withIconWrapper(DragHandleIcon);
