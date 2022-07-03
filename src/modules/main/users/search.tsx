import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUserSearchTerm, userSelector, getUsers, setUsers } from '../../../redux';
import debounce from 'debounce'
import colors from '../../../shared/colors';

const UserSearch = () => {
  const user = useSelector(userSelector);
  const [initialized, setInitialized] = useState<boolean>(false);

  const dispatch = useDispatch();

  const searchUsers = debounce((e: string) =>
    dispatch(setUserSearchTerm(e))
    , 400);

  useEffect(() => {
    if (initialized) {
      dispatch(setUsers([]));
      dispatch(getUsers(0));
    } else {
      setInitialized(true);
    }
  }, [user.searchTerm]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search users'
        onChangeText={searchUsers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: '100%',
    padding: 10,
    marginBottom: 8,
    borderRadius: 5,
  },
});

export default UserSearch;
