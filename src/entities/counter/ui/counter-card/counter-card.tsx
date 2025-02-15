//NATIVE
import { View } from 'react-native';
//MODEL
import { CounterCardProps } from './model/counter-card.model';
//STYLES
import style from './styles/style';
import Paragraph from '../../../../shared/ui/paragraph/paragraph';

const CounterCard = ({ counter }: CounterCardProps) => {
	return (
		<View style={style.counterCard}>
			<View style={style.header}>
				<Paragraph contentType={'primary'} size={'medium'}>
					{counter.name}
				</Paragraph>
			</View>

			<View style={style.controls}>
				<Paragraph contentType={'primary'} size={'large'}>
					-1
				</Paragraph>
				<Paragraph contentType={'primary'} size={'large'}>
					{counter.id}
				</Paragraph>
				<Paragraph contentType={'primary'} size={'large'}>
					+1
				</Paragraph>
			</View>
		</View>
	);
};

export default CounterCard;
