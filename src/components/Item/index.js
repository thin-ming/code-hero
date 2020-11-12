import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

function Item({ id, thumbnail, name }) {
  const { navigate } = useNavigation();

  function setHero() {
    navigate('Details', { id });
  }

  return (
    <TouchableHighlight
      activeOpacity={0.9}
      underlayColor="#DDD"
      onPress={setHero}
    >
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={{
            uri: `${thumbnail.path}/standard_medium.${thumbnail.extension}`,
          }}
        />
        <View style={styles.info} onPress>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.link}>See more</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default Item;
