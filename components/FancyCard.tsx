import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={{padding:15}}>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={(styles.card, styles.cardElevated)}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/dPOd11jie4FDcWTUHzKe9BJbi5DZS0_bCz21BKiCaUk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZW5j/aC1jaXR5LXBhcmst/YWxsZXktMjA0NjI0/OTQuanBn',
          }}
          style={styles.cardImg}
        />
        <View style={styles.cardbody}>
          <Text style={styles.cardTitle}>Hawa hawai nature</Text>
          <Text style={styles.cardLabel}>location : jaipur and nagaland</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit
            aut ab.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    paddingHorizontal: 12,
    fontWeight: 'bold',
  },
  cardImg: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius:8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 5,
    marginVertical: 12,
    marginHorizontal: 16,
    
    
  },
  cardElevated: {
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius:8,
    padding:2,
    shadowOffset:{
      width:0,
      height:3
    },
    shadowColor:'#000000',
    shadowRadius:2,
    shadowOpacity:0.18,
    elevation:4
  },
  cardbody: {
    marginVertical: 6,
    marginLeft: 9,
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    // marginVertical:7,
    paddingVertical: 7,
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardLabel: {color: 'black', fontSize: 16},
  cardDescription: {color: 'black', fontSize: 12},
});
