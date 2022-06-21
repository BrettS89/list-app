import { View, TouchableOpacity } from 'react-native';
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicon from '@expo/vector-icons/Ionicons';
import { Todo } from '../../../types';
import { singleOrPlural } from '../../../utilities';
import styles from './styles';
import Typography from '../../../components/typography';
import colors from '../../../shared/colors';

interface Props {
  todo: Todo;
  onPressLike(todoId: string): void;
}

const Item: React.FC<Props> = ({ todo, onPressLike }) => {
  const renderLikeIcon = () => {
    if (todo.youLiked) {
      return (
        <View>
          <Ionicon
            name='ios-thumbs-up-sharp'
            color={colors.main}
            style={styles.likeButton}
          />
        </View>
      );
    }

    return (
      <TouchableOpacity
        onPress={() => onPressLike(todo._id)}
      >
        <Ionicon
          name='ios-thumbs-up-sharp'
          color='gray'
          style={styles.likeButton}
        />
      </TouchableOpacity>
    );
  }

  const renderLikes = () => {
    if (todo.likes) {
      return (
        <Typography styles={styles.likesInfo}>
          {todo.likes} {singleOrPlural('like', todo.likes)}
        </Typography>
      );
    }
  };

  const renderComments = () => {
    if (todo.comments?.total) {
      return (
        <Typography styles={styles.commentsInfo}>
          {todo.comments?.total} {singleOrPlural('comment', todo.comments.total)}
        </Typography>
      );
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.userContent}>
        <View style={styles.userContentLeft}>
          <MaterialIcon
            name='account-circle'
            style={styles.userIcon}
          />
          <View style={styles.userContentName}>
            <Typography styles={styles.userContentNameText}>
              {todo.user?.profile?.firstName} {todo.user?.profile?.lastName}
            </Typography>
            <Typography styles={styles.userContentUsernameText}>
              @{todo.user?.profile?.username}
            </Typography>
          </View>
        </View>
        <TouchableOpacity>
          <MaterialIcon
            name='dots-vertical'
            color='gray'
            style={styles.dotsIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.todoContent}>
        <MaterialIcon
          name='check-bold'
          color={colors.green}
          style={styles.checkIcon}
        />
        <View style={{ flexShrink: 1 }}>
          <Typography styles={styles.todoContentText}>
            {todo.body}
          </Typography>
        </View>
      </View>
      <View style={styles.actionContent}>
        <View style={styles.actionContentLeft}>
          {renderLikeIcon()}
          <TouchableOpacity>
            <Ionicon
              name='chatbox'
              color='gray'
              style={styles.commentButton}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.actionContentRight}>
          {renderLikes()}
          {renderComments()}
        </View>

      </View>
    </View>
  );
};

export default Item;
