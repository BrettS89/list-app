import { View } from 'react-native';
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { User as UserType } from '../../../types';
import Typography from '../../../components/typography';
import styles from './styles';

interface Props {
  user: UserType;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <View style={styles.user}>
      <View style={styles.leftContent}>
        <MaterialIcon
          name='account-circle'
          style={styles.userIcon}
        />
        <View>
          <Typography styles={styles.userRealName}>
            {user.profile.firstName} {user.profile.lastName}
          </Typography>
          <Typography styles={styles.userUsername}>
            @{user.profile.username}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default User;
