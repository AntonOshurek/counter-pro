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
    },
    linkToGroup: {
      flex: 1
    }
  });

export default style;
