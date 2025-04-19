//NATIVE
import { View } from 'react-native';
//STORE
import { useAppSelector } from '@shared/store';
import { SelectorGetCounterCreatedDate } from '../../store/selectors/counter-selectors';
//LIBS
import { formatDate } from '@shared/lib/date-lib';
//UI
import Paragraph from '@ui/paragraph/paragraph';
//MODEL
import type { CreatedDateProps } from './model/created-date.model';
//STYLES
import { style } from './style/style';
//TEXT
import { counterText } from '@shared/text-content/text-content';

const CreatedDate = ({ counterId }: CreatedDateProps) => {
	const createdDate = useAppSelector(SelectorGetCounterCreatedDate(counterId));

	const formatedDate = formatDate(createdDate);

	return (
		<View style={style.createdDate}>
			<Paragraph contentType={'primary'} size={'small'}>
				{counterText.counterCreatedDateLabel}
			</Paragraph>

			<Paragraph contentType={'primary'} size={'small'}>
				{formatedDate}
			</Paragraph>
		</View>
	);
};

export default CreatedDate;
