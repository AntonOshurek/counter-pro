import { StyleSheet } from 'react-native';
import { ColorThemes } from '../../../entities/theme';
import { colors } from '../../../shaared/styles';

const style = (theme: ColorThemes) => StyleSheet.create({
  groupsList: {
    borderBottomWidth: 1,
    borderColor: 'tomato',
  },
  group: {
    backgroundColor: colors[theme].mainSurfaceTertiary
  }
});

export default style;
