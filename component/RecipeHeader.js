import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../colors';

const viewsData = [
  {
    imageSource: require('../img/prepare.png'),
    text: 'Préparez vos plats maison avec facilité.',
  },
  {
    imageSource: require('../img/prepare.png'),
    text: 'Savourez des repas délicieux et sains.',
  },
  {
    imageSource: require('../img/prepare.png'),
    text: 'Découvrez de nouveau plats.',
  },
];

const RecipeHeader = () => {
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
        <Text style={styles.homeTitle}>Bienvenue !</Text>
        <Text style={styles.homeSubtitle}>
          {currentData.text.split(' ').map((word, index) => (
            <Text
              key={index}
              style={[
                styles.homeText,
                word === 'nouveau' || word === 'facilité.' || word === 'délicieux'
                  ? { color: colors.primaryColors }
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
  },
  leftColumn: {
    flex: 6,
    paddingRight: 10,
  },
  rightColumn: {
    flex: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  homeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkText,
  },
  homeSubtitle: {
    color: colors.darkText,
    fontWeight: 'bold',
    fontSize: 28,
  },
  homeText: {
    fontWeight: 'bold',
  },
});

export default RecipeHeader;
