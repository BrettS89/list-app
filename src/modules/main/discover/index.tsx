import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { contentSelector, onLikeTodo, getTodos } from '../../../redux';
import DiscoverItem from './item';
import styles from './styles';

const Discover = () => {
  const dispatch = useDispatch();
  const content = useSelector(contentSelector);

  const onPressLike = (todoId: string) => {
    dispatch(onLikeTodo(todoId));
  };

  const onPressComment = () => {

  };

  const onEndReached = () => {
    dispatch(getTodos())
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={content.todos.discover}
        keyExtractor={t => t._id}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
        renderItem={({ item }) => (
          <DiscoverItem
            todo={item}
            onPressLike={onPressLike}
          />
        )}
      />
    </View>
  );
};

export default Discover;
