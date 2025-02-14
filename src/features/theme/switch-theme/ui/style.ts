//NATIVE
import { StyleSheet, Platform } from 'react-native';

const style = StyleSheet.create({
  themeSwitcher: {
    gap: 20
  },
  themeSwitcherGroup: {
    ...Platform.select({
      ios: { gap: 20 }
    })
  }
});

export default style;
