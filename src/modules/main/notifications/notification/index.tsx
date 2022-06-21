import { View } from 'react-native';
import Typography from '../../../../components/typography';
import LikeOrCommentNotification from './like-or-comment';
import { Notification as NotificationType } from '../../../../types';

interface Props {
  notification: NotificationType;
}

const Notification: React.FC<Props> = ({ notification }) => {
  switch(notification.type) {
    case 'comment':
      return (
        <LikeOrCommentNotification
          notification={notification}
        />
      );

    case 'like':
      return (
        <LikeOrCommentNotification
          notification={notification}
        />
      );

    default:
      return (
        <View>
          <Typography>
            Something went wrong
          </Typography>
        </View>
      );
  }
};

export default Notification;
