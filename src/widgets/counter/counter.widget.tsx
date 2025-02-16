//NATIVE
import { View } from 'react-native';
//ENTITIES
import { CounterValue } from '../../entities/counter/';
//FEATURES
import { PrimaryDecrementButton, IncrementSurface } from '../../features/counter';
//UI
import { CounterControlsWrapper } from '../../shared/wrappers';
//STYLES
import style from './styles/style';

const CounterWidget = () => {
	return (
		<View style={style.counterWidget}>
			<IncrementSurface counterId={'some-counter-id'}>
				<CounterValue counterId={'some-counter-id'} />
			</IncrementSurface>

			<CounterControlsWrapper>
				<PrimaryDecrementButton counterId={'some-counter-id'} />
			</CounterControlsWrapper>
		</View>
	);
};

export default CounterWidget;
