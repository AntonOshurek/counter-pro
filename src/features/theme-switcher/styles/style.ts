import { ColorThemes } from '../../../entities/theme';
import { StyleSheet } from 'react-native';
import { colors } from '../../../shaared/styles';

const style = (theme: ColorThemes) => StyleSheet.create({
  themeSwitcher: {
    backgroundColor: colors[theme].mainSurfaceTertiary,
    padding: 20,
    borderRadius: 20,
    gap: 20
  },
  themeSwitcherTitle: {
    color: colors[theme].textSecondary,
    fontSize: 20,
    textTransform: 'capitalize'
  }
});

export default style;
