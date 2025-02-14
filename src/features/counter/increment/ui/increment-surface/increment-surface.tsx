//NATIVE
import { TouchableOpacity } from 'react-native';
//FEATURES
import useIncrement from '../../increment';
//MODEL
import type { IncrementSurfaceProps } from './increment-surface.model';
//STYLES
import style from './style';

const IncrementSurface = ({ children, counterId }: IncrementSurfaceProps) => {
	const increment = useIncrement({ counterId });

	return (
		<TouchableOpacity
			onPress={increment}
			style={style.incrementSurface}
			activeOpacity={1}
		>
			{children}
		</TouchableOpacity>
	);
};

export default IncrementSurface;
