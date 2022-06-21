import { View, SafeAreaView } from 'react-native';
import { Navigation } from '../../../types';
import Typography from '../../../components/typography';
import Button from '../../../components/button';
import styles from './styles';

const Welcome: React.FC<Navigation> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Typography styles={styles.logo}>
          We 
        </Typography>
        <Typography styles={styles.logo2}>
          do.
        </Typography>
      </View>
      
      <Button
        styles={styles.button}
        onPress={() => navigation.navigate('Signup')}
      >
        Signup
      </Button>
      <Button
        styles={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        Login
      </Button>
    </SafeAreaView>
  );
};

export default Welcome;
