import { StyleSheet } from 'react-native';
import colors from '../../../shared/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  notification: {
    padding: 10,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    color: 'gray',
    fontSize: 65,
    marginRight: 8,
  },
  notificationContent: {
    flexDirection: 'row',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  regularText: {
    fontWeight: '700',
    lineHeight: 22,
    marginHorizontal: 5,
  },
  linkText: {
    fontWeight: '900',
    color: colors.main,
    lineHeight: 22,

  },
});
