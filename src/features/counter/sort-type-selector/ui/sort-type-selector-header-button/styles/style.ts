import { StyleSheet } from 'react-native';

const  style = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  menu: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5
  },
  item: {
    padding: 10,
    fontSize: 16
  }
})

export default style;
