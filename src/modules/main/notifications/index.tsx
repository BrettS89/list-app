import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { communicationSelector } from '../../../redux';
import styles from './styles';
import Notification from './notification';

const Notifications = () => {
  const communication = useSelector(communicationSelector);

  return (
    <View style={styles.container}>
      <FlatList
        data={communication.notifications}
        keyExtractor={n => n._id}
        renderItem={({ item }) => (
          <Notification
            notification={item}
          />
        )}
      />
    </View>
  );
};

export default Notifications;
