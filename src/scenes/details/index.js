import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import IconBack from '../../assets/icons/arrow_back.png';

function Details({ route: { params: { id: heroID } } }) {
  const [hero] = useSelector((state) =>
    state.heroes.heroes.filter((item) => item.id === heroID),
  );

  const { goBack } = useNavigation();

  return (
    <>
      <Header title={hero.name} backButton={true}>
        <TouchableOpacity style={styles.iconBackWrapper} onPress={() => goBack()}>
          <Image
            style={styles.iconBack}
            source={IconBack}
          />
        </TouchableOpacity>
      </Header>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.photo}
            source={{
              uri: `${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`,
            }}
          />
          <View style={styles.info}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>
              {hero.description === '' ? 'Without description' : hero.description}
            </Text>
          </View>
          <View style={styles.comics}>
            <Text style={styles.comicsTitle}>Comics</Text>
            {hero.comics.items.map((comic) => (
              <Text key={comic.resourceURI} style={styles.comicsName}>{comic.name}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Details;
