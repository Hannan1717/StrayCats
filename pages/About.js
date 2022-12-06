import { View, Text, Image, StyleSheet } from 'react-native';

function About() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/cathd.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>Stray Cats</Text>
      </View>
      <View style={styles.itemListContent}>
        <Text style={styles.itemListText}>
          {'Stray Cat program was developed by M.Yoga Ainur Rofiq, a student at Diponegoro University in the Department of Computer Engineering, in order to complete the final project of the "Praktikum Pemrograman Perangkat Bergerak"'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#FFF8EA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    paddingBottom: 30,
  },
  headerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  headerText: {
    marginTop: 10,
    color: '#434655',
    fontWeight: 'bold',
    fontSize: 28,
  },
  itemListContent: {
    alignItems: 'center',
    marginTop: 55,
    marginHorizontal: 55,
  },
  itemListText: {
    color: '#626262',
    marginHorizontal: 4,
    fontWeight: 'reguler',
    fontSize: 19,
    textAlign: 'center',
  },
});

export default About;
