import { StyleSheet } from 'react-native';
import colors from '../../../../shared/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },
  inputContainer: {
    padding: 15,
    paddingTop: 10,
    height: 200,
  },
  inputText: {
    fontSize: 18,
    lineHeight: 25,
  },
  addButtonContainer: {
    padding: 15,
  }
});
