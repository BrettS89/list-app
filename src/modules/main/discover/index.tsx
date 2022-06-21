import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { contentSelector, onLikeTodo } from '../../../redux';
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

  return (
    <View style={styles.container}>
      <FlatList
        data={content.todos.discover}
        keyExtractor={t => t._id}
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
