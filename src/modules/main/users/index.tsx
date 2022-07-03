import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, getUsers } from '../../../redux';
import User from './user';
import styles from './styles';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const onEndReached = () => {
    dispatch(getUsers(user.list.length));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={user.list}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
        keyExtractor={u => u._id}
        renderItem={({ item }) => (
          <User
            user={item}
          />
        )}
      />
    </View>
  );
};

export default Users;
