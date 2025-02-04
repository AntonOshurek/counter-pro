import { StyleSheet } from 'react-native';
//TYPES
import { ColorThemes } from '../../../../entities/theme/';
//COLORS
import { colors } from '../../../styles';

const style = (theme: ColorThemes) => StyleSheet.create({
  switcher: {
    backgroundColor: colors[theme].secondary,
  }
});

export default style;
