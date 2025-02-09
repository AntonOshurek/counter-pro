import { StyleSheet } from 'react-native';
//TYPES
import { ColorThemes } from '../../../../entities/theme';
//COLORS
import { colors } from '../../../styles';

const style = (theme: ColorThemes) =>
  StyleSheet.create({
    settingsGroupWrapper: {
      backgroundColor: colors[theme].mainSurfaceTertiary,
      padding: 20,
      borderRadius: 20,
    }
  });

export default style;
