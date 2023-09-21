import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../colors';

const viewsData = [
  {
    imageSource: require('../img/love.png'),
    text: 'Teams Recipe',
  },
];

const RecipeTeamFavoriteHeaderList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % viewsData.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentData = viewsData[currentIndex];

  return (
    <LinearGradient
    colors={["#C0A2DF", "#905CC6"]}
    start={{ x: 0, y: 0 }}
  end={{ x: 0, y: 1 }}
  style={{ flex: 1,     borderRadius: 15, marginBottom: '3%',  }}
>
    <View
      style={styles.container}
    >
      <View style={styles.leftColumn}>
        <Image
          source={currentData.imageSource}
          style={styles.image}
        />
      </View>
      <View style={styles.centerColumn}>
      <Text style={styles.homeTitle}>
          {currentData.text.split(' ').map((word, index) => (
            <Text
              key={index}
              style={[
                styles.homeText,
                word === 'Teams'
                  ? { color: colors.darkText, fontWeight: 'bold' }
                  : null,
              ]}
            >
              {word}{' '}
            </Text>
          ))}
        </Text>
        <Text style={styles.homeSubtitle}>Discover the team favorite recipe</Text>
      </View>
      <View style={styles.rightColumn}>
      <Image
    source={require('../img/arrow_right.png')}
    style={styles.arrowImage}
  />
      </View>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  leftColumn: {
    flex: 3,
    paddingRight: 10,
  },
  centerColumn: {
    flex: 6,
  },
  rightColumn: {
    flex: 2,
  },
  arrowImage:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  homeSubtitle: {
    fontSize: 12,
    color: colors.lightText,
  },
  homeTitle: {
    color: colors.lightText,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default RecipeTeamFavoriteHeaderList;
