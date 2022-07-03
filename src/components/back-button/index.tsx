import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Back from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import colors from '../../shared/colors';

const HeaderBack = ({ moreStyles={} }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Back name="arrow-left" size={28} color={colors.background} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingLeft: 0,
    marginLeft: 0,
  },
  icon: {
    marginLeft: 0,
    paddingLeft: 0,
  }
});

export default HeaderBack;
