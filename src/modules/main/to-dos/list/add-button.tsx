import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';

const AddTodoButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CreateTodoStack')}>
      <Ionicons name='ios-add-circle' style={styles.addButton} />
    </TouchableOpacity>
  );
};

export default AddTodoButton;
