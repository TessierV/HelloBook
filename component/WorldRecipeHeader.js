import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../colors';

const viewsData = [
  {
    imageSource: require('../img/eating.png'),
    text: 'Explorez les cuisines du monde depuis chez vous',
  },
  {
    imageSource: require('../img/eating.png'),
    text: 'Voyagez à travers les saveurs du monde.',
  },
];

const WorldRecipeHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % viewsData.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentData = viewsData[currentIndex];

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
      <Text style={styles.homeSubtitle}>Cuisine du Monde</Text>
        <Text style={styles.homeTitle}>

          {currentData.text.split(' ').map((word, index) => (

            <Text
              key={index}
              style={[
                styles.homeText,
                word === 'saveurs' || word === 'Explorez'
                  ? { color: colors.primaryColors, fontWeight: "bold", }
                  : null,
              ]}
            >
              {word}{' '}
            </Text>
          ))}

        </Text>

      </View>
      <View style={styles.rightColumn}>
        <Image
          source={currentData.imageSource}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    justifyContent: 'center',
    marginBottom: '5%',
  },
  leftColumn: {
    flex: 7,
    paddingRight: 10,

  },
  rightColumn: {
    flex: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  homeTitle: {
    fontSize: 14,
    color: colors.darkText,
  },
  homeSubtitle: {
    color: colors.darkText,
    fontWeight: 'bold',
    fontSize: 28,
  },
});

export default WorldRecipeHeader;
