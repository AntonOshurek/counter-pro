//LIBS
import Svg, { Path } from 'react-native-svg';
//HOC
import withIconWrapper from '../hooks/withIconsWrapper';
//TYPES
import type { IconProps } from './model/icon.model';

const KeepOffIcon = (props: IconProps) => {
	return (
		<Svg {...props} viewBox='0 -960 960 960'>
			<Path d='M680-840v80h-40v327l-80-80v-247H400v87l-87-87-33-33v-47h400ZM480-40l-40-40v-240H240v-80l80-80v-46L56-792l56-56 736 736-58 56-264-264h-6v240l-40 40ZM354-400h92l-44-44-2-2-46 46Zm126-193Zm-78 149Z' />
		</Svg>
	);
};

export default withIconWrapper(KeepOffIcon);
