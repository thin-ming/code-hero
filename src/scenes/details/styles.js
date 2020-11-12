import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  iconBackWrapper: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  iconBack: {
    width: 26,
    height: 26,
  },
  container: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  photo: {
    width: 200,
    height: 300,
    marginBottom: 30,
  },
  info: {
    borderBottomWidth: 1,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomColor: '#DDD',
    alignSelf: 'stretch',
  },
  descriptionTitle: {
    textAlign: 'center',
    color: '#292929',
    fontSize: 20,
    paddingBottom: 20,
  },
  description: {
    textAlign: 'center',
    color: '#7d7d7d',
    fontSize: 16,
    paddingBottom: 40,
  },
  comics: {
    alignSelf: 'stretch',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 40,
    marginBottom: 40,
  },
  comicsTitle: {
    paddingBottom: 6,
    fontSize: 20,
    color: '#292929',
  },
  comicsName: {
    marginLeft: 10,
    paddingTop: 6,
    paddingBottom: 6,
    color: '#7d7d7d',
    fontSize: 16,
  },
});

export default styles;
