import { ColorThemes } from '../../../entities/theme';
import { StyleSheet } from 'react-native';
import { colors } from '../../../shaared/styles';

const style = (theme: ColorThemes) => StyleSheet.create({
  themeSwitcher: {
    gap: 20
  },
  themeSwitcherTitle: {
    color: colors[theme].textSecondary,
    fontSize: 20,
    textTransform: 'capitalize'
  }
});

export default style;
