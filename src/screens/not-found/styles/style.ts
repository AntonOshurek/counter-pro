//NATIVE
import { StyleSheet } from 'react-native';
//ENTITIES
import { ColorThemes } from '@shared/types';
//STYLES
import { colors } from '@shared/styles';


const style = (theme: ColorThemes) =>
  StyleSheet.create({
    counterNotFound: {
      backgroundColor: colors[theme].mainSurfacePrimary,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export { style };
