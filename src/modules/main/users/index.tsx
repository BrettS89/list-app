import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../../redux';
import User from './user';
import styles from './styles';

const Users: React.FC = (props) => {
  const user = useSelector(userSelector);

  return (
    <View style={styles.container}>
      <FlatList
        data={user.list}
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
