import { FC } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { contentSelector, onFinishTodo, setCompleteTodoModalOpen } from '../../../../redux';
import { Navigation } from '../../../../types';
import TodoItem from './item';
import FinishModal from './finish-modal';
import styles from './styles';

const Todos: FC<Navigation> = ({ navigation: { navigate } }) => {
  const content = useSelector(contentSelector);
  const dispatch = useDispatch();

  const setModalOpen = (open: boolean, todoId?: string) => {
    dispatch(setCompleteTodoModalOpen({ open, todoId }));
  };

  const onComplete = (data: { todoId: string, public: boolean, file?: Blob }) => {
    dispatch(onFinishTodo(data));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={content.todos.mine}
        keyExtractor={t => t._id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            setModalOpen={setModalOpen}
          />
        )}
      />
      <FinishModal 
        isOpen={content.completeTodoModal}
        setModalOpen={setModalOpen}
        onComplete={onComplete}
      />
    </View>
  );
};

export default Todos;
