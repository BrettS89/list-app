import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux';
import Navigation from './src/navigation';
// import LoadingScreen from './src/shared/components/loading-screen';

export default function App() {
  return (
    <Provider store={store()}>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
        {/* <LoadingScreen /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
