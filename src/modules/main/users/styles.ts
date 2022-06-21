import { StyleSheet } from 'react-native';
import colors from '../../../shared/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  user: {
    padding: 10,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    fontSize: 65,
    color: 'gray',
    marginRight: 8,
  },
  userRealName: {
    fontWeight: '900',
  },
  userUsername: {
    fontWeight: '700',
    color: 'gray'
  },
});
