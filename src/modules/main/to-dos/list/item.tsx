import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { Todo } from '../../../../types';
import Typography from '../../../../components/typography';
import styles from './styles';

interface Props {
  todo: Todo;
  setModalOpen(open: boolean, todoId?: string): void;
}

const TodoItem: FC<Props> = ({ setModalOpen, todo }) => {
  const onPressCompleteTodo = () => {
    setModalOpen(true, todo._id);
  };

  return (
    <View style={styles.item}>
      <View style={{ flexShrink: 1 }}>
        <Typography styles={styles.todoText}>
          {todo.body}
        </Typography>
      </View>
      <View style={styles.itemActions}>
        <TouchableOpacity
          onPress={onPressCompleteTodo}
        >
          <MaterialIcon
            name='check-bold'
            color='gray'
            style={styles.checkIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon
            name='dots-vertical'
            color='gray'
            style={styles.dotsIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;