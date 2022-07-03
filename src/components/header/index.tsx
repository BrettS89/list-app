import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../shared/colors';
import Typography from '../typography';

import UserSearch from '../../modules/main/users/search';
import BackButton from '../back-button';
import AddButton from '../../modules/main/to-dos/list/add-button';

interface Props {
  type: 'back' | 'user-search' | 'discover-search' | 'title';
  addTodo?: boolean;
  title?: string;
}

const Header: React.FC<Props> = ({ title, type, addTodo }) => {
  const alignCenter = addTodo ? { alignItems: 'center' } : {}

  const renderTitle = (
    <Typography styles={styles.title}>
      {title}
    </Typography>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between', ...alignCenter }}>
        {type === 'title' && renderTitle}
        {addTodo && <AddButton />}
        {type === 'user-search' && <UserSearch/>}
        {type === 'back' && <BackButton />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    height: 92,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 0,
    paddingLeft: 0,
    fontSize: 22,
    fontWeight: '900',
    color: colors.background
  }
});

export default Header;
