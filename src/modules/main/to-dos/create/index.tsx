import { FC, useState } from 'react';
import { TextInput, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { Navigation } from '../../../../types';
import { addTodo } from '../../../../redux';
import Button from '../../../../components/button';
import styles from './styles';

const CreateTodo: FC<Navigation> = ({ navigation }) => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');

  const onPressAdd = () => {
    dispatch(addTodo({ todo, navigate: navigation.goBack }));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Add your to-do. Inlude #hashtags, or @ mention a friend...'
          placeholderTextColor='gray'
          style={styles.inputText}
          value={todo}
          onChangeText={setTodo}
          multiline
        />
      </View>
      <View style={styles.addButtonContainer}>
        <Button onPress={onPressAdd}>
          Add to your list
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateTodo;
