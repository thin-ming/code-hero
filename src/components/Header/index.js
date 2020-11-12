import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function Header({ title, children }) {
  return (
    <View style={styles.container}>
      { children }
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Header;
