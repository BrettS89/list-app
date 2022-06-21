import { StyleSheet } from 'react-native';
import colors from '../../../../shared/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.background,
  },
  addButton: {
    color: colors.background,
    fontSize: 36,
    marginBottom: 8,
  },
  item: {
    padding: 15,
    paddingTop: 16,
    paddingBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  todoText: {
    fontWeight: '900',
    flexShrink: 1,
  },
  itemActions: {
    display: 'flex',
    flexDirection: 'row',
  },
  checkIcon: {
    fontSize: 28,
    marginLeft: 10,
  },
  dotsIcon: {
    fontSize: 28,
    marginLeft: 12,
  },
  finishModal: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishModalContent: {
    borderRadius: 8,
    width: '80%',
    backgroundColor: colors.background,
    paddingBottom: 15,
  },
  finishModalTitleContainer: {
    paddingTop: 15,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: colors.main,
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  finishModalTitle: {
    fontWeight: '900',
    fontSize: 24,
    marginBottom: 15,
    color: colors.background,
  },
  finishModalRow: {
    paddingHorizontal: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  finishModalPhotoText: {
    fontWeight: '900',
    fontSize: 16,
    color: colors.main,
  },
  finishModalImageIcon: {
    fontSize: 24,
    color: colors.main,
    marginRight: 8
  },
  finishModalShareText: {
    fontWeight: '900',
    fontSize: 16,
    marginLeft: 11,
  },
  finishModalButtonContainer: {
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 25,
  },
  finishModalButton: {
    width: 200,
    marginBottom: 15,
  }
});
