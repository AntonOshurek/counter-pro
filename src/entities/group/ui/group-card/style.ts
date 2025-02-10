//NATIVE
import { StyleSheet } from 'react-native';
//TYPES
import type { ColorThemes} from '../../../theme';
//STYLES
import { colors } from '../../../../shaared/styles';

const style = (theme: ColorThemes) =>
  StyleSheet.create({
    groupCard: {
      borderRadius: 10,
      padding: 10,
      backgroundColor: colors[theme].mainSurfacePrimary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    draggable: {
      shadowColor: colors[theme].alwaysBlack,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.6,
      shadowRadius: 6,
      elevation: 6
    },
    linkToGroup: {
      flex: 1
    }
  });

export default style;
