import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    flexDirection: 'row',
  },
  photo: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#292929',
    fontSize: 16,
  },
  link: {
    color: '#8C8C8C',
    fontSize: 16,
  },
});

export default styles;
