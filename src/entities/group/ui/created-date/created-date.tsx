//NATIVE
import { View } from 'react-native';
//STORE
import { useAppSelector } from '../../../../shared/store';
import { SelectorGetGroupCreatedDate } from '../../';
//LIBS
import { formatDate } from '../../../../shared/lib/date-lib';
//UI
import Paragraph from '../../../../shared/ui/paragraph/paragraph';
//MODEL
import { CreatedDateProps } from './model/created-date.model';
//STYLES
import { style } from './style/style';
//TEXT
import { groupText } from '../../../../shared/text-content/text-content';

const CreatedDate = ({ groupId }: CreatedDateProps) => {
	const createdDate = useAppSelector(SelectorGetGroupCreatedDate(groupId));

	const formatedDate = formatDate(createdDate);

	return (
		<View style={style.createdDate}>
			<Paragraph contentType={'primary'} size={'small'}>
				{groupText.groupCreatedDateLabel}
			</Paragraph>

			<Paragraph contentType={'primary'} size={'small'}>
				{formatedDate}
			</Paragraph>
		</View>
	);
};

export default CreatedDate;
