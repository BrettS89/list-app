import { StyleSheet } from 'react-native';
import colors from '../../../shared/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.background,
  },
  item: {
    backgroundColor: colors.background,
    padding: 10,
    paddingVertical: 7,
    paddingBottom: 5,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  userContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  userContentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userContentName: {

  },
  userContentNameText: {
    fontWeight: '700',
  },
  userContentUsernameText: {
    fontWeight: '700',
    color: 'gray',
  },
  userIcon: {
    fontSize: 65,
    color: 'gray',
    marginRight: 8,
  },
  userContentRight: {
    
  },
  dotsIcon: {
    fontSize: 28,
  },
  todoContent: {
    // backgroundColor: 'lightgray',
    // padding: 2,
    // borderRadius: 3,
    paddingHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },
  checkIcon: {
    fontSize: 32,
    marginRight: 8,
  },
  todoContentText: {
    fontWeight: '900',
  },
  actionContent: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actionContentLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionContentRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    fontSize: 22,
    marginRight: 25,
    paddingBottom: 5,
  },
  commentButton: {
    fontSize: 22,
  },
  likesInfo: {
    color: 'gray'
  },
  commentsInfo: {
    marginLeft: 10,
    color: 'gray'
  },
});
