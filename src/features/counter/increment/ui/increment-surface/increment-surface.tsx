//NATIVE
import { TouchableOpacity, View } from 'react-native';
//FEATURES
import useIncrement from '../../increment';
//ENTITIES
import { useAppSelector } from '../../../../../shared/store';
import { SelectorGetCounterStep } from '../../../../../entities/counter';
//UI
import Paragraph from '../../../../../shared/ui/paragraph/paragraph';
//MODEL
import type { IncrementSurfaceProps } from './increment-surface.model';
//STYLES
import style from './style';

const IncrementSurface = ({ children, counterId }: IncrementSurfaceProps) => {
	const increment = useIncrement({ counterId });
	const step = useAppSelector(SelectorGetCounterStep(counterId));

	return (
		<TouchableOpacity
			onPress={increment}
			style={style.incrementSurface}
			activeOpacity={1}
		>
			<View style={style.stepInfo}>
				<Paragraph contentType={'tertiary'} size={'small'}>
					step - {step}
				</Paragraph>
			</View>
			{children}
		</TouchableOpacity>
	);
};

export default IncrementSurface;
