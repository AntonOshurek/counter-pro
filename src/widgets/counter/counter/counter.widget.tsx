//NATIVE
import { View } from 'react-native';
//ENTITIES
import { CounterValue, CounterStep } from '@entities/counter';
//FEATURES
import { PrimaryDecrementButton, IncrementSurface } from '@features/counter';
//MODEL
import { CounterWidgetProps } from './model/counter-widget.model';
//UI
import { CounterControlsWrapper } from '@shared/wrappers';
//STYLES
import style from './styles/style';

const CounterWidget = ({ counter }: CounterWidgetProps) => {
	return (
		<View style={style.counterWidget}>
			<IncrementSurface counterId={counter.id}>
				<CounterStep counterId={counter.id} additionalClass={style.stepInfo} />
				<CounterValue counterId={counter.id} />
			</IncrementSurface>

			<CounterControlsWrapper>
				<PrimaryDecrementButton counterId={counter.id} />
			</CounterControlsWrapper>
		</View>
	);
};

export default CounterWidget;
