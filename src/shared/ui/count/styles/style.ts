import { StyleSheet } from 'react-native';
//ENTITIES
import type { ColorThemes } from '@shared/types';
//TYPES
import type { Sizes } from '../../../types/';
//STYLES
import { colors } from '../../../styles';

const counterSize = {
	small: 30,
	medium: 80,
	large: 180
};

const style = (theme: ColorThemes, size?: Sizes) =>
	StyleSheet.create({
		Count: {
			justifyContent: 'center',
			alignItems: 'center'
		},
		countText: {
			color: colors[theme].textPrimary,
			fontSize: size ? counterSize[size] : 180,
			textAlign: 'center'
		}
	});

export default style;
