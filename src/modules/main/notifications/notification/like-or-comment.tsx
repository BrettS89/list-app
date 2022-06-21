import { TouchableOpacity, View } from 'react-native';
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons';
import Typography from '../../../../components/typography';
import { Notification } from '../../../../types';
import styles from '../styles';

interface Props {
  notification: Notification;
}

const LikeOrCommentNotification: React.FC<Props> = ({ notification }) => {
  const actionText = notification.type === 'comment'
    ? 'commented on your to-do:'
    : 'liked your to-do:';

  return (
    <View style={styles.notification}>
        <MaterialIcon
          name='account-circle'
          style={styles.leftIcon}
        />
      <View style={styles.notificationContent}>
        <TouchableOpacity>
          <Typography styles={styles.linkText}>
            {notification.fromUser?.profile?.firstName} {notification.fromUser?.profile?.lastName}
          </Typography>
        </TouchableOpacity>
        <Typography styles={styles.regularText}>
          {actionText}
        </Typography>
        <TouchableOpacity>
          <Typography styles={styles.linkText}>
            {notification.todo?.body}
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LikeOrCommentNotification;
